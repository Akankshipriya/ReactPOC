export default function Pagination(){
    const [page, setPage] = React.useState(1);
    return <>
    <div>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>
            {page} of {nbPages}
        </p>
        <button onClick={()=>getNextPage()}></button>
    </div>
    </>
}