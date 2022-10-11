export const ButtonPrimary = (e) => {
  return (
    <button
      className="flex justify-center flex-row py-2 px-3 text-lg font-xl text-center text-white bg-blue-900 h-10 hover:bg-blue-700 dark:bg-zinc-700 "
      onClick={e.onClick}
    >
      {e.label}
    </button>
  );
};

export const ButtonSecondary = (e) => {
  return (
    <button className="p-3 border rounded-lg bg-slate-100 text-black">
      {e.label}
    </button>
  );
};

export const ButtonFavorite = (e) => {
  return (
    <button
      className="flex px-4 py-2 text-sm font-xl gap-1 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-500 dark:hover:bg-zinc-400"
      onClick={e.onClick}
    >
      {e.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </button>
  );
};

export const ButtonDetail = (e) => {
  return (
    <button
      className="flex px-4 py-2 text-sm font-xl gap-1 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-500 dark:hover:bg-zinc-400"
      onClick={e.onClick}
    >
      {e.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </button>
  );
};

export const ButtonRemove = (e) => {
  return (
    <button
      className="flex px-4 py-2 text-sm font-xl gap-1 text-center text-white bg-red-500 rounded-lg hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-600 "
      onClick={e.onClick}
    >
      {e.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};

export const ButtonWatch = (e) => {
  return (
    <button
      className="flex px-4 py-2 text-sm font-xl gap-1 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-500 dark:hover:bg-zinc-400"
      onClick={e.onClick}
    >
      {e.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
    </button>
  );
};

export const ButtonMode = (e) => {
  return (
    <button
      className="text-5xl text-white hover:text-orange-500 hover:scale-125 transition"
      onClick={e.onClick}
    >
      {e.label}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg> */}
    </button>
  );
};

// export { ButtonPrimary, ButtonSecondary };
