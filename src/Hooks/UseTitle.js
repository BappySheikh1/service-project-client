import { useEffect } from "react";

const useTitle =title=>{
    useEffect(()=>{
        document.title= `${title} -Wild `;
    },[title])
}

export default useTitle;