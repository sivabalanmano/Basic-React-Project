import Menulist from "./Menulist";


export default function MenuTree ({sideMenu= []}){
    return <div className="tree">
     <Menulist list={sideMenu}/>
    </div>

}