import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button
            className="btn btn-light"
            type="button">
                    All employees
            </button>
            <button
            className="btn btn-light"
            type="button">
                    Hight
            </button>
            <button
            className="btn btn-light"
            type="button">
                    More than
            </button>
        </div>
    )
}

export default AppFilter;