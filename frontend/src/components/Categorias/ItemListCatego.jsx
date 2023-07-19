
 import ItemCardCatego from "./ItemCardCatego";

 const ItemListCatego = ({ items}) => {
    return(
        <div>
            {
                items.map((data, index) => (
                    <div key={data._id}>
                        <ItemCardCatego itemData={data}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemListCatego;  

/*key={data._id}  */
