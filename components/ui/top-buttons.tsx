'use client';

const TopButtons = () => {
  return (
    <div className="fixed top-6 right-6 flex items-center gap-6 z-10">
      <a
        href="https://github.com/devxMani/Peek-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/github.svg" alt="GitHub" width={20} height={20} />
        <span className="relative after:absolute after:w-0 after:h-px after:bg-orange-500 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-200">
          Star on GitHub
        </span>
      </a>
    </div>
  );
};

export default TopButtons;
