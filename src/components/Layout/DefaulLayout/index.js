import Header from "~/components/Layout/components/Header";
import Slidebar from "./Slidebar";

function DefaulLayout( {children} ) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Slidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaulLayout;