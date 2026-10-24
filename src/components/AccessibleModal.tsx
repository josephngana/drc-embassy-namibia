import React, { useEffect, useRef, useId } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

/** Native modal semantics, inert background, keyboard trapping and focus restoration. */
export function AccessibleModal({ children, onClose, drawer = false }: { children: React.ReactNode; onClose: () => void; drawer?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = useRef(onClose);
  close.current = onClose;
  const titleId = useId();
  const { t } = useLanguage();
  useEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    const heading = dialog.querySelector('h2, h3, h4');
    if (heading) { heading.id = titleId; dialog.setAttribute('aria-labelledby', titleId); }
    dialog.querySelectorAll('button').forEach(button => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) button.setAttribute('aria-label', t({en:'Close dialog',fr:'Fermer la fenêtre'}));
    });
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [titleId]);
  return createPortal(<dialog ref={ref} className={drawer ? "accessible-modal accessible-drawer" : "accessible-modal"} aria-label={drawer ? t({en:'Navigation menu',fr:'Menu de navigation'}) : undefined} onCancel={event => {event.preventDefault(); close.current();}} onClick={event => {if(event.target === event.currentTarget) close.current();}}>{children}</dialog>, document.body);
}
