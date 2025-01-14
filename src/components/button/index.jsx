import { BsBookmarkPlusFill } from "react-icons/bs";
import {GoBookmarkSlashFill} from "react-icons/go"
import { useSelector, useDispatch } from "react-redux";
import {toggleMovieList} from "../../redux/actions/listActions";

const Button = ({movie}) => {
  const dispatch = useDispatch();
const {list} = useSelector((store) => store);

//ekrana basilan film izleme listesinde var mi ?
const isAdded = list.find(item => item.id == movie.id)

//film eger listede varsa kaldir yoksa ekle 
const handleClick = () => {
dispatch( toggleMovieList (movie, !isAdded) )

}
  return (
    <button onClick={handleClick} className="hero-btn bg-blue-600 hover:bg-blue-700">
      {isAdded ? (
<>
      <GoBookmarkSlashFill />
      Listeden Kaldir
</>
      ) : (
        <>
         <BsBookmarkPlusFill />
         Listeye Ekle 
         </>
      )}
    </button>
  );
};

export default Button;