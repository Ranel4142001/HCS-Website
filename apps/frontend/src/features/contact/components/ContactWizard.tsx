'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '../validation/contact.schema';
import { submitContactForm } from '../services/contact.service';
import RoleStep from './RoleStep';
import DetailsStep from './DetailsStep';
import SuccessPanel from './SuccessPanel';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';

export const ContactWizard: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessPanel, setShowSuccessPanel] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      role: 'individual',
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const selectedRole = form.watch('role');

  const handleSelectRole = (role: 'individual' | 'group' | 'enterprise') => {
    form.setValue('role', role, { shouldValidate: true });
  };

  const onSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      await submitContactForm(data);
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setShowSuccessPanel(true);
      }, 550);
    } catch (err) {
      setIsLoading(false);
      triggerShake();
    }
  }, () => {
    triggerShake();
  });

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 420);
  };

  const handleReset = () => {
    form.reset();
    setStep(1);
    setIsLoading(false);
    setIsSuccess(false);
    setShowSuccessPanel(false);
    setIsShaking(false);
  };

  // 3D Card Tilt Effect on mousemove
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
    if (reduceMotion || isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateY(${px * 4}deg) rotateX(${py * -4}deg) translateY(-2px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  };

  return (
    <section className="form-section" id="contact">
      <div className="container form-grid">
        <div className="form-copy">
          <Badge icon={<Icon name="sparkle" />}>Get Started Today</Badge>
          <h2>
            Ready to Simplify Your <em>Credentialing?</em>
          </h2>
          <p>
            Tell us about your providers and payers. A credentialing specialist will send you a personalized quote and a realistic timeline — no obligation.
          </p>

          <ul className="form-trust">
            <li>
              <Icon name="check" /> Free quote and timeline, no obligation
            </li>
            <li>
              <Icon name="check" /> Secure, HIPAA-aligned document handling
            </li>
            <li>
              <Icon name="check" /> A dedicated credentialing specialist
            </li>
          </ul>
        </div>

        <motion.div
          className="form-card-wrap"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="form-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {!showSuccessPanel ? (
              <>
                <div className="form-card-head">
                  <h3>Get Your Free Credentialing Quote</h3>
                  <p>Step {step} of 2 — {step === 1 ? 'Select Your Practice Type' : 'Enter Contact Details'}</p>
                </div>

                <div className={`form-progress ${step === 2 ? 'step-2' : ''}`}>
                  <div className={`fp-step ${step === 1 ? 'active' : 'done'}`} data-fp="1">
                    <span className="fp-num">1</span>
                    <span>Practice Type</span>
                  </div>
                  <div className="fp-line" />
                  <div className={`fp-step ${step === 2 ? 'active' : ''}`} data-fp="2">
                    <span className="fp-num">2</span>
                    <span>Details</span>
                  </div>
                </div>

                <form onSubmit={onSubmit} noValidate>
                  <div style={{ display: showSuccessPanel ? 'none' : 'block' }}>
                    {step === 1 && (
                      <RoleStep
                        selectedRole={selectedRole}
                        onSelectRole={handleSelectRole}
                        onNext={() => setStep(2)}
                      />
                    )}

                    {step === 2 && (
                      <DetailsStep
                        form={form}
                        onBack={() => setStep(1)}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        isShaking={isShaking}
                      />
                    )}
                  </div>
                </form>
              </>
            ) : (
              <SuccessPanel onReset={handleReset} />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactWizard;

