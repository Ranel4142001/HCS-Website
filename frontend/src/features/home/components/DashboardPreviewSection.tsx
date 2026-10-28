'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import type { TabId } from '../types';
import {
  TABS,
  CHECKLIST_GROUPS,
  UPCOMING_ASSIGNMENT,
  OVERVIEW,
  ADD_PROVIDERS,
  PROVIDERS,
  ROLES,
  ROADMAP,
  AUDIT_ROWS,
  AUDIT_EVENT_GROUPS,
  type Tone,
} from '../content/dashboard';
import './DashboardPreviewSection.css';

const SECTIONS = CHECKLIST_GROUPS.flatMap((g) => g.sections);
const COMPLETE = SECTIONS.filter((s) => s.percent === undefined).length;
const PROGRESS = Math.round((COMPLETE / SECTIONS.length) * 100);

interface CardProps {
  title: string;
  sub: string;
  pill?: { text: string; tone: Tone };
  wide?: boolean;
  children: React.ReactNode;
}

function Card({ title, sub, pill, wide, children }: CardProps) {
  return (
    <div className={`rtv-card${wide ? ' rtv-card-wide' : ''}`}>
      <div className="rtv-card-top">
        <div>
          <h3>{title}</h3>
          <span className="rtv-sub">{sub}</span>
        </div>
        {pill && <Chip tone={pill.tone}>{pill.text}</Chip>}
      </div>
      {children}
    </div>
  );
}

function Chip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <span className={`rtv-chip rtv-chip--${tone}`}>{children}</span>;
}

/** Label/value rows, the building block of most cards. */
function Rows({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
  return (
    <ul className="rtv-rows">
      {rows.map((row) => (
        <li key={row.label}>
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </li>
      ))}
    </ul>
  );
}

function ProviderChecklist() {
  return (
    <div className="rtv-grid">
      <Card title="Credentialing progress" sub="What the provider sees when they sign in" wide pill={{ text: `${PROGRESS}% done`, tone: 'active' }}>
        <div className="rtv-progress">
          <div className="rtv-ring" style={{ '--p': PROGRESS } as React.CSSProperties}>
            <span>{PROGRESS}%</span>
          </div>
          <div>
            <p className="rtv-progress-title">You&rsquo;re {PROGRESS}% of the way there</p>
            <p className="rtv-progress-sub">
              {COMPLETE} of {SECTIONS.length} sections complete · each takes about 1 to 8 minutes
            </p>
          </div>
        </div>
      </Card>

      <Card title="Upcoming assignment" sub="Decides whose file is prepared first" pill={{ text: 'In progress', tone: 'active' }}>
        <Rows rows={UPCOMING_ASSIGNMENT} />
      </Card>

      {CHECKLIST_GROUPS.map((group) => (
        <Card key={group.title} title={group.title} sub={`${group.sections.length} sections`}>
          <Rows
            rows={group.sections.map((s) => ({
              label: `${s.name} · ~${s.minutes} min`,
              value: s.percent === undefined ? <Chip tone="done">Complete</Chip> : <Chip tone="active">{s.percent}% done</Chip>,
            }))}
          />
        </Card>
      ))}
    </div>
  );
}

function TeamConsole() {
  return (
    <div className="rtv-grid">
      <Card title="Credentialing overview" sub="Every provider your team manages" wide>
        <dl className="rtv-kpis">
          {OVERVIEW.map((kpi) => (
            <div key={kpi.label}>
              <dt>{kpi.label}</dt>
              <dd>{kpi.value}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <Card title="Add providers" sub="Bring in one provider or a full roster">
        <Rows rows={ADD_PROVIDERS} />
      </Card>

      <Card title="Providers" sub="Status and completion for each file">
        <ul className="rtv-rows">
          {PROVIDERS.map((p) => (
            <li key={p.name}>
              <span className="rtv-provider">
                {p.name}
                <span className="rtv-meter" role="img" aria-label={`${p.percent}% complete`}>
                  <span style={{ width: `${p.percent}%` }} />
                </span>
              </span>
              <Chip tone={p.tone}>{p.status}</Chip>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Roles" sub="Each person sees only what their role allows">
        <Rows rows={ROLES} />
      </Card>

      <Card title="Coming soon" sub="Planned, not live yet">
        <Rows rows={ROADMAP.map((item) => ({ label: item, value: <Chip tone="neutral">Soon</Chip> }))} />
      </Card>
    </div>
  );
}

function AuditTrail() {
  return (
    <div className="rtv-grid">
      <Card title="Audit trail" sub="Who did what, and when" wide>
        <table className="rtv-table">
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">Who</th>
              <th scope="col">Event</th>
              <th scope="col">Record</th>
            </tr>
          </thead>
          <tbody>
            {AUDIT_ROWS.map((row) => (
              <tr key={row.when}>
                <td>{row.when}</td>
                <td>
                  <strong>{row.who}</strong>
                  <span>{row.role}</span>
                </td>
                <td>{row.event}</td>
                <td>{row.record}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="A permanent record" sub="Nothing can be edited or removed" pill={{ text: 'Locked', tone: 'done' }}>
        <ul className="rtv-checks">
          <li><Icon name="check" /> Recorded the moment each action happens</li>
          <li><Icon name="check" /> Viewing the log is logged too</li>
          <li><Icon name="check" /> Filter by date range and event</li>
        </ul>
      </Card>

      {AUDIT_EVENT_GROUPS.map((group) => (
        <Card key={group.title} title={group.title} sub={group.sub}>
          <Rows rows={group.events.map((event) => ({ label: event, value: <Chip tone="done">Logged</Chip> }))} />
        </Card>
      ))}
    </div>
  );
}

const PANELS: Record<TabId, React.FC> = {
  provider: ProviderChecklist,
  team: TeamConsole,
  audit: AuditTrail,
};

export const DashboardPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('provider');
  const Panel = PANELS[activeTab];

  return (
    <section className="rtv-section" id="rtv">
      <div className="rtv-blobs" aria-hidden="true">
        <div className="rtv-blob rtv-blob-teal" />
        <div className="rtv-blob rtv-blob-cyan" />
        <div className="rtv-blob rtv-blob-indigo" />
      </div>

      <div className="container rtv-inner">
        <div className="rtv-header">
          <div className="rtv-tag">
            <Icon name="bar" />
            <span>The HCStat credentialing portal</span>
          </div>
          <h2>See where every provider stands, at a glance</h2>
          <p className="rtv-subtitle">
            Providers complete a guided checklist. Your team tracks every file in one console. <em>Sample data shown.</em>
          </p>
        </div>

        <div className="rtv-tabs-wrapper" role="tablist" aria-label="Portal views">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                id={`rtv-tab-${tab.id}`}
                className={`rtv-tab-btn ${isActive ? 'is-active' : ''}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="rtv-panel"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div key={activeTab} id="rtv-panel" className="rtv-panel" role="tabpanel" aria-labelledby={`rtv-tab-${activeTab}`}>
          <Panel />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
