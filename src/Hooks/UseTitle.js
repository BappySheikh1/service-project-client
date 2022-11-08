import { useEffect } from "react";

const useTitle =title=>{
    useEffect(()=>{
        document.title= `${title} -Wildzy `;
    },[title])
}

export default useTitle;