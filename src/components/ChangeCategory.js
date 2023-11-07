import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeCategory = (props) => {
    const {excuse, fetchData} = useContext(AppContext)

    return (
        <div>
        <button onClick={() => fetchData(props.category)}> Generate</button>

        <h2> {excuse}</h2>
    </div>
    );
}