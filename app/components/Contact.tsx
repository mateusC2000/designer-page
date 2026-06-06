'use client';

import { useState } from 'react';
import { Send, Loader, Phone, MessageSquare, Target, Check, Clock, Mail } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
}

type Step = 'name' | 'company' | 'email' | 'phone' | 'project' | 'budget' | 'timeline' | 'complete';

export default function Contact() {
  const [step, setStep] = useState<Step>('name');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDescription: '',
    budget: '',
    timeline: '',
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const questions: Record<Step, string> = {
    name: 'Como você se chama?',
    company: `Perfeito, ${formData.name}! Qual é o nome da sua empresa?`,
    email: 'Qual é seu melhor email para contato?',
    phone: 'Qual é seu telefone?',
    project: 'Descreva sua ideia de projeto. O que você precisa?',
    budget: 'Qual é seu orçamento estimado?',
    timeline: 'Qual é seu timeline esperado para iniciar?',
    complete: 'Pronto!',
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const transitionToStep = (newStep: Step) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setIsTransitioning(false);
    }, 500); // Transição um pouco mais longa para dar tempo de animar
  };

  const handleNext = async () => {
    setError('');

    if (step === 'name') {
      if (!input.trim()) {
        setError('Por favor, digite seu nome');
        return;
      }
      setFormData({ ...formData, name: input.trim() });
      transitionToStep('company');
      setInput('');
    } else if (step === 'company') {
      if (!input.trim()) {
        setError('Por favor, digite o nome da empresa');
        return;
      }
      setFormData({ ...formData, company: input.trim() });
      transitionToStep('email');
      setInput('');
    } else if (step === 'email') {
      if (!input.trim()) {
        setError('Por favor, digite seu email');
        return;
      }
      if (!validateEmail(input.trim())) {
        setError('Email inválido');
        return;
      }
      setFormData({ ...formData, email: input.trim() });
      transitionToStep('phone');
      setInput('');
    } else if (step === 'phone') {
      if (input.trim()) {
        setFormData({ ...formData, phone: input.trim() });
      }
      transitionToStep('project');
      setInput('');
    } else if (step === 'project') {
      if (!input.trim()) {
        setError('Por favor, descreva seu projeto');
        return;
      }
      setFormData({ ...formData, projectDescription: input.trim() });
      transitionToStep('budget');
      setInput('');
    } else if (step === 'budget') {
      if (input.trim()) {
        setFormData({ ...formData, budget: input.trim() });
      }
      transitionToStep('timeline');
      setInput('');
    } else if (step === 'timeline') {
      if (input.trim()) {
        setFormData({ ...formData, timeline: input.trim() });
      }
      await submitForm();
    }
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar contato');
      }

      setStep('complete');
      setSubmitted(true);
      setInput('');
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleNext();
    }
  };

  const progress = {
    name: 14,
    company: 28,
    email: 42,
    phone: 57,
    project: 71,
    budget: 85,
    timeline: 100,
    complete: 100,
  };

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-max mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="heading-xl mb-4 text-dark-900">
              Vamos conversar sobre seu <span className="text-dark-500">projeto?</span>
            </h2>
            <p className="text-lg text-dark-500">
              Responda algumas perguntas e receba um orçamento personalizado
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fadeInUp">
            {!submitted ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-dark-600">Progresso</span>
                    <span className="text-sm font-medium text-dark-600">
                      {progress[step]}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-dark-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-dark-400 to-dark-900 transition-all duration-500"
                      style={{ width: `${progress[step]}%` }}
                    />
                  </div>
                </div>

                {/* Área com transição lenta para Chat e Input */}
                <div className={`space-y-6 transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {/* Chat Message */}
                  <div className="min-h-24 flex flex-col justify-center">
                    <div className="bg-dark-50 rounded-xl p-6 border border-dark-200">
                      <p className="text-lg font-light text-dark-900 leading-relaxed">
                        {questions[step]}
                      </p>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="space-y-4">
                    {step === 'phone' || step === 'budget' || step === 'timeline' ? (
                      <p className="text-sm text-dark-500 italic">Campo opcional</p>
                    ) : null}

                    {step === 'project' ? (
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite aqui sua resposta..."
                        className="w-full h-32 px-4 py-3 rounded-xl border border-dark-200 focus:border-dark-900 focus:ring-2 focus:ring-dark-900/20 outline-none transition resize-none text-dark-900 placeholder-dark-400"
                        disabled={loading}
                      />
                    ) : (
                      <input
                        type={step === 'email' ? 'email' : step === 'phone' ? 'tel' : 'text'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite aqui sua resposta..."
                        className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-dark-900 focus:ring-2 focus:ring-dark-900/20 outline-none transition text-dark-900 placeholder-dark-400"
                        disabled={loading}
                        autoFocus
                      />
                    )}

                    {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  {step !== 'name' && (
                    <button
                      onClick={() => {
                        const stepOrder: Step[] = [
                          'name',
                          'company',
                          'email',
                          'phone',
                          'project',
                          'budget',
                          'timeline',
                        ];
                        const currentIndex = stepOrder.indexOf(step);
                        if (currentIndex > 0) {
                          transitionToStep(stepOrder[currentIndex - 1]);
                          setInput('');
                          setError('');
                        }
                      }}
                      className="button-secondary flex-1"
                      disabled={loading || isTransitioning}
                    >
                      Voltar
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={loading || isTransitioning}
                    className="button-primary flex-1 inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        {step === 'timeline' ? 'Enviar' : 'Próximo'}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Helper Text */}
                <p className="text-xs text-dark-500 text-center">
                  Dica: Seja o mais detalhado possível para um orçamento mais preciso
                </p>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-12 animate-scaleIn space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-900 rounded-full">
                  <Check className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="heading-lg text-dark-900 mb-2">
                    Obrigado, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-lg text-dark-500 mb-4">
                    Seu contato foi recebido com sucesso
                  </p>
                  <div className="bg-dark-50 border border-dark-200 rounded-xl p-4 text-left">
                    <p className="text-sm text-dark-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-dark-900" />
                      <span><strong>Confirmação enviada para:</strong> {formData.email}</span>
                    </p>
                    <p className="text-sm text-dark-700 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dark-900" />
                      <span><strong>Tempo de resposta:</strong> 24-48 horas</span>
                    </p>
                  </div>
                </div>

                <p className="text-dark-600">
                  Nossa equipe está analisando sua solicitação e em breve enviaremos um
                  orçamento personalizado.
                </p>

                <button
                  onClick={() => {
                    setStep('name');
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      projectDescription: '',
                      budget: '',
                      timeline: '',
                    });
                    setInput('');
                    setError('');
                    setSubmitted(false);
                  }}
                  className="button-secondary"
                >
                  Enviar outro contato
                </button>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Clock className="w-8 h-8 text-dark-900" />,
                title: 'Suporte Rápido',
                desc: 'Respondemos em até 48 horas',
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-dark-900" />,
                title: 'Conversa Realista',
                desc: 'Entendemos suas necessidades',
              },
              {
                icon: <Target className="w-8 h-8 text-dark-900" />,
                title: 'Orçamento Preciso',
                desc: 'Com base nas suas informações',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-white border border-dark-200 hover:border-dark-300 transition animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-dark-900 mb-1">{item.title}</h4>
                <p className="text-sm text-dark-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
