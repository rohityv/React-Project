import React, {Fragment, useState} from 'react'

export default function TvShowInfo({allData, nextPage, prevPage, pageCount, isLoading}) {

    const [searchValue, setSearchValue] = useState('')

    const filteredValue = allData.filter( (value) => {
        return value.name.toLowerCase().includes(searchValue)
    })


    const pagination = function(){
        return <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${pageCount>0? '' : 'disabled'}`}>
                    <button className="page-link" type="submit" onClick = {prevPage}>Previous</button>
                </li>
                <li className="page-item active"><span className="page-link">{pageCount + 1}</span></li>

                <li className="page-item">
                    <button className="page-link" type="submit" onClick={nextPage}>Next</button>
                </li>
            </ul>
        </nav>
    }

    const renderHtml = function() {
        return filteredValue.map((data) => {
            return <div className="col-md-4 col-lg-3 col-6" key={data.id}>
                <div className="card">
                    {data.image ? <img src={data.image.medium} className="card-img-top img-fluid" alt={`${data.name} poster`} />: <h4>Img not Found</h4>}
                    <div className="card-body">
                        <h4 className="card-title">{data.name}</h4>
                        <p className="card-text">{`${data.premiered === null ? '-' : data.premiered.substring(0, 4)} to ${data.ended === null ? '-' :data.ended.substring(0, 4)}`}</p>
                        <a rel="noopener" href={data.url} className="card-link btn btn-info" target='_blank'>Show Info</a>
                    </div>
                </div>
            </div>
        })
    }

    return (
      <Fragment>
        <div className="row g-3">
          <div className="col-12 mt-5">
            <input
              value={searchValue}
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="search show"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <p className="float-end">{searchValue.length > 0 ? `${filteredValue.length} result found` : `showing ${filteredValue.length} out of ${allData.length}`} </p>
          </div>
          {pagination()}
          {isLoading ? <h1>...Loading</h1> : renderHtml()}
        </div>
      </Fragment>
    );
}
