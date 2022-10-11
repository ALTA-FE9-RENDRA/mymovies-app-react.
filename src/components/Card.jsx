import { ButtonDetail } from "./Button";
import { ButtonFavorite } from "./Button";
const Card = (movie) => {
  return (
    <div className="flex flex-col text-zinc-800 dark:text-slate-200 bg-white dark:bg-blue-900 dark:bg-opacity-80 dark:border-slate-800 justify-center p-4 shadow-lg rounded-lg border">
      <img
        className="w-full h-full"
        src={`https://image.tmdb.org/t/p/w500${movie.image}`}
        alt={movie.title}
      />
      <p className="text-center p-2">{movie.title}</p>
      <div className="grid grid-cols-2 gap-4 justify-between">
        <div onClick={movie.onNavigate}>
          <ButtonDetail label={`Details`} />
        </div>
        <div onClick={movie.addFavorite}>
          <ButtonFavorite label={`Favorite`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
