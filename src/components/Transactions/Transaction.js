import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

function Transaction({ transaction }) {
    const { name, amount, type,id} = transaction || {};
    const dispatch=useDispatch();

    const handleEdit=()=>{
        dispatch(editActive(transaction));
    }

    const handleDelete=()=>{
        dispatch(removeTransaction(id));
    }
    return (
        <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
            <p>৳ {numberWithCommas(amount)}</p>
            <button className="link" onClick={handleEdit}>
                <img alt="Edit" className="icon" src={editImage} />
            </button>
            <button className="link" onClick={handleDelete}>
                <img alt="Delete" className="icon" src={deleteImage} />
            </button>
        </div>
    </li>
    );
  }
  
  export default Transaction;
  