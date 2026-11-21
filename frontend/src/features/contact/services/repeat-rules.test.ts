// Run with `npm test`. A mistake in these rules silently turns real leads away, so each case is one a person hits.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { judgeRepeat, normalizeEmail } from './repeat-rules.ts';

const NOW = Date.parse('2026-11-21T12:00:00Z');
const DAY = 24 * 60 * 60 * 1000;
const lead = (email: string, daysAgo: number, submitter = '') => ({
  email,
  submitter,
  createdAt: new Date(NOW - daysAgo * DAY).toISOString(),
});

test('one Gmail inbox counts once, however it is written', () => {
  assert.equal(normalizeEmail(' J.Doe+quote@GoogleMail.com '), 'jdoe@gmail.com');
});

test('dots in other providers are real, so different people stay different', () => {
  assert.notEqual(normalizeEmail('j.doe@clinic.com'), normalizeEmail('jdoe@clinic.com'));
});

test('the same person within 30 days is a duplicate; after that they may ask again', () => {
  assert.equal(judgeRepeat([lead('jdoe@gmail.com', 29)], 'J.Doe@gmail.com', undefined, NOW), 'duplicate');
  assert.equal(judgeRepeat([lead('jdoe@gmail.com', 31)], 'jdoe@gmail.com', undefined, NOW), 'ok');
});

test('a new person is never blocked by other people on the board', () => {
  assert.equal(judgeRepeat([lead('a@clinic.com', 1), lead('b@clinic.com', 1)], 'c@clinic.com', undefined, NOW), 'ok');
});

test('a fourth request from one network in a day is refused; a third is allowed', () => {
  const two = [lead('a@x.com', 0.1, 'net1'), lead('b@x.com', 0.2, 'net1')];
  assert.equal(judgeRepeat(two, 'c@x.com', 'net1', NOW), 'ok');
  assert.equal(judgeRepeat([...two, lead('c@x.com', 0.3, 'net1')], 'd@x.com', 'net1', NOW), 'too_many');
  assert.equal(judgeRepeat([...two, lead('c@x.com', 2, 'net1')], 'd@x.com', 'net1', NOW), 'ok');
});
