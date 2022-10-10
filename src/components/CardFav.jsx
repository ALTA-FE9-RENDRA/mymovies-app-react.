import { ButtonDetail, ButtonRemove } from "./Button";
const Card = (e) => {
  return (
    <div className="flex flex-col text-zinc-800 dark:text-slate-200 bg-white dark:bg-orange-900 dark:bg-opacity-70 dark:border-slate-800  justify-center p-3 shadow-lg rounded-lg border">
      <img
        className="w-full h-full"
        src={`https://image.tmdb.org/t/p/w500${e.image}`}
        alt={e.title}
      />
      <p className="text-center p-2">{e.title}</p>
      <div className="flex gap-2 justify-between">
        <div onClick={e.onNavigate}>
          <ButtonDetail label={`Details`} />
        </div>
        <div onClick={e.addFavorite}>
          <ButtonRemove label={`Remove`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
