import TodoItem from './../TodoItem/TodoItem';

const TodoList = ({todoList, setKey, data, setData, setStatus}) => {
    return (
        <div>
               {
                todoList.map(item =>{
                    return <TodoItem satus={setStatus} setKey={setKey} item={item} data={data} setData={setData} />
                })
            }
        </div>
    );
}

export default TodoList;
