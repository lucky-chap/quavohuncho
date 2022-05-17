import siteMetadata from '@/data/siteMetadata';
import { ButtonType } from '@/lib/types';

type Props = {
  buttonType: ButtonType;
  children: React.ReactNode | any;
};

export const ResumeDownload: React.FC<Props> = ({
  buttonType,
  children
}) => {
  return (
    <a
      aria-label="button"
      download={true}
      href={siteMetadata.resume}
      type="button"
      className={`md:w-auto text-center md:inline-flex py-3 px-2 md:px-12 rounded-full w-full ${
        buttonType === ButtonType.PRIMARY
          ? 'bg-midnight text-white dark:bg-gray-200 dark:text-midnight'
          : buttonType === ButtonType.SECONDARY
          ? 'bg-gray-200 dark:bg-midnight text-midnight dark:text-white'
          : null
      } items-center justify-center general-ring-state font-medium`}
    >
      {children}
    </a>
  );
};
