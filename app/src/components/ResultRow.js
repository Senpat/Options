

const ResultRow = ({rank,option,estimatedreturn}) => {


    return (
        <div>
            <p>{rank}: {option.description}, Estimated return: {estimatedreturn}%</p>
        </div>
    )

}

export default ResultRow