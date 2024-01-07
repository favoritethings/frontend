'use client';

import { useEffect, useRef, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

/**
 * @description
 * https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
 * Parallel Routes를 사용하여 모달을 처리했습니다 위 링크 참고해주세요.
 */

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onClick: MouseEventHandler<HTMLDialogElement> = (event) => {
    if (event.target === event.currentTarget) router.back();
  };

  const onDismiss = () => router.back();

  return createPortal(
    <div>
      <dialog
        ref={dialogRef}
        onClick={onClick}
        onClose={onDismiss}
        className="flex flex-col backdrop:bg-black/50 max-w-[720px] w-full pt-[16px] pb-[64px] px-[15px]"
      >
        <div className="flex justify-end">
          <button onClick={onDismiss}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="cursor-pointer"
            >
              <mask
                id="mask0_198_1403"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="48"
                height="48"
              >
                <rect width="48" height="48" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_198_1403)">
                <path
                  d="M12.642 36.4576L11.542 35.3576L22.8997 23.9999L11.542 12.6422L12.642 11.5422L23.9997 22.8999L35.3574 11.5422L36.4574 12.6422L25.0997 23.9999L36.4574 35.3576L35.3574 36.4576L23.9997 25.0999L12.642 36.4576Z"
                  fill="#1C1718"
                />
              </g>
            </svg>
          </button>
        </div>
        {children}
      </dialog>
    </div>,
    document.getElementById('portal-root')!
  );
};

export default Modal;
