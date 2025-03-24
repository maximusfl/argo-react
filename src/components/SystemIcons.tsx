import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

// Дыхательная система (лёгкие)
export const RespiratoryIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,2 C10,2 8.5,3 8.5,5 C8.5,7 9,10 6,11.5 C3,13 2,16 2,18 C2,20 4,22 7,22 C10,22 10.5,18 10.5,16 C10.5,14 11,9 12,9 C13,9 13.5,14 13.5,16 C13.5,18 14,22 17,22 C20,22 22,20 22,18 C22,16 21,13 18,11.5 C15,10 15.5,7 15.5,5 C15.5,3 14,2 12,2 Z" />
  </SvgIcon>
);

// Зрительная система (глаз)
export const VisionIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,9 C10.34,9 9,10.34 9,12 C9,13.66 10.34,15 12,15 C13.66,15 15,13.66 15,12 C15,10.34 13.66,9 12,9 Z M12,17 C9.24,17 7,14.76 7,12 C7,9.24 9.24,7 12,7 C14.76,7 17,9.24 17,12 C17,14.76 14.76,17 12,17 Z M12,4.5 C7,4.5 2.73,7.61 1,12 C2.73,16.39 7,19.5 12,19.5 C17,19.5 21.27,16.39 23,12 C21.27,7.61 17,4.5 12,4.5 Z" />
    <circle cx="12" cy="12" r="2.5" />
  </SvgIcon>
);

// Иммунная система (щит с лейкоцитом)
export const ImmuneIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,1 L3,5 L3,11 C3,16.55 6.84,21.74 12,23 C17.16,21.74 21,16.55 21,11 L21,5 L12,1 Z" />
    <circle cx="12" cy="12" r="4" fill="white" />
    <path d="M12,8 C14.2,8 16,9.8 16,12 C16,14.2 14.2,16 12,16 C9.8,16 8,14.2 8,12 C8,9.8 9.8,8 12,8 Z M10,11 L11,11 L11,10 L13,10 L13,11 L14,11 L14,13 L13,13 L13,14 L11,14 L11,13 L10,13 Z" fill="currentColor" />
  </SvgIcon>
);

// Лимфатическая система (лимфатические узлы и сосуды)
export const LymphaticIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,2 C10.5,2 9,2.5 9,4 C9,5.5 10.5,6 12,6 C13.5,6 15,5.5 15,4 C15,2.5 13.5,2 12,2 Z" />
    <path d="M12,6 L12,22" />
    <circle cx="12" cy="9" r="1.5" />
    <circle cx="12" cy="14" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
    <path d="M12,9 L16,9 C17.5,9 18.5,10.5 17,11.5" />
    <path d="M12,14 L8,14 C6.5,14 5.5,15.5 7,16.5" />
    <path d="M12,19 L16,19 C17.5,19 18.5,20.5 17,21.5" />
  </SvgIcon>
);

// Мочевыделительная система (почки)
export const UrinaryIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M8,6 C5.5,6 3,8.5 3,11 C3,13.5 4,17 7,17 C9,17 10,15 10,13 L10,11 C10,8.5 10.5,6 8,6 Z" />
    <path d="M16,6 C18.5,6 21,8.5 21,11 C21,13.5 20,17 17,17 C15,17 14,15 14,13 L14,11 C14,8.5 13.5,6 16,6 Z" />
    <path d="M10,13 L14,13" />
    <path d="M12,13 L12,20" />
    <circle cx="12" cy="21" r="1" />
  </SvgIcon>
);

// Нервная система (мозг и нервы)
export const NervousIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,2 C7.5,2 4,4.5 4,8 C4,10.5 6,12.5 8.5,13.5 C9.5,14 10,15 9,16 L9,18 C9,19 9.5,20 10.5,20 L11,20 L11,21 C11,21.5 11.5,22.5 12.5,22.5 C13.5,22.5 14,21.5 14,21 L14,20 L14.5,20 C15.5,20 16,19 16,18 L16,16 C15,15 15.5,14 16.5,13.5 C19,12.5 21,10.5 21,8 C21,4.5 17.5,2 12,2 Z" />
    <path d="M10,10 C10,11.1 10.9,12 12,12 C13.1,12 14,11.1 14,10 C14,8.9 13.1,8 12,8 C10.9,8 10,8.9 10,10 Z" />
  </SvgIcon>
);

// Опорно-двигательная система (кости и мышцы)
export const SkeletalIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M9,2 L9,7 L8,7 C7.5,7 7,7.5 7,8 L7,16 C7,16.5 7.5,17 8,17 L9,17 L9,22 L10,22 C11,22 11.5,21.5 12,21 C12.5,21.5 13,22 14,22 L15,22 L15,17 L16,17 C16.5,17 17,16.5 17,16 L17,8 C17,7.5 16.5,7 16,7 L15,7 L15,2 L14,2 C13,2 12.5,2.5 12,3 C11.5,2.5 11,2 10,2 L9,2 Z" />
    <rect x="10" y="7" width="4" height="10" rx="1" />
  </SvgIcon>
);

// Пищеварительная система (желудок и кишечник)
export const DigestiveIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M8,5 C6,5 5,7 5,9 C5,11 6,13 8,13 L10,13 C11,13 11.5,13.5 11.5,14.5 C11.5,15.5 11,19 12,19 C13,19 12.5,15.5 12.5,14.5 C12.5,13.5 13,13 14,13 L16,13 C18,13 19,11 19,9 C19,7 18,5 16,5 L14,5 C13,5 12.5,5.5 12,6 C11.5,5.5 11,5 10,5 L8,5 Z" />
    <path d="M12,19 C11,19 10,20 10,21 L14,21 C14,20 13,19 12,19 Z" />
    <path d="M12,4 L12,6" />
  </SvgIcon>
);

// Покровная система (кожа)
export const IntegumentaryIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M3,12 C3,16.97 7.03,21 12,21 C16.97,21 21,16.97 21,12 C21,7.03 16.97,3 12,3 C7.03,3 3,7.03 3,12 Z" />
    <path d="M7,9 L9,12 L7,15" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M12,17 L17,17" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M14,8 L17,8" fill="none" stroke="currentColor" strokeWidth="1" />
  </SvgIcon>
);

// Репродуктивная система (комбинация мужских и женских символов)
export const ReproductiveIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle cx="15" cy="6" r="3" />
    <path d="M15,9 L15,14" />
    <path d="M12,12 L18,12" />
    <circle cx="9" cy="15" r="3" />
    <path d="M9,18 L9,21" />
  </SvgIcon>
);

// Сердечно-сосудистая система (сердце и сосуды)
export const CardiovascularIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12,21 C11.5,21 11,20.8 10.7,20.6 C5.33,16.5 2,13.15 2,9.5 C2,6.42 4.42,4 7.5,4 C9.24,4 10.91,4.92 12,6.33 C13.09,4.92 14.76,4 16.5,4 C19.58,4 22,6.42 22,9.5 C22,13.15 18.67,16.5 13.3,20.6 C13,20.8 12.5,21 12,21 Z" />
    <path d="M7,10 L12,15 L17,10" fill="none" stroke="white" strokeWidth="1" />
  </SvgIcon>
);

// Эндокринная система (щитовидная железа и гипофиз)
export const EndocrineIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle cx="12" cy="6" r="2" />
    <path d="M12,8 L12,10" />
    <path d="M5,12 C5,10 8,10 12,10 C16,10 19,10 19,12 C19,14 16,16 12,16 C8,16 5,14 5,12 Z" />
    <path d="M12,16 L12,20" />
    <circle cx="12" cy="20" r="1" />
  </SvgIcon>
); 