import Square from "./Square"

function Board(props){
    return (
        props.cells.map((item, index) => (
            <Square 
                className={item === 'X' ? 'isX' : item === 'O' ? 'isO' : ''}
                key={index} 
                value={item} 
                onClick={() => props.onClick(index)}/>
        ))
    )
}

export default Board