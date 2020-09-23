

// !Code Non utilisé pour l'instant je fait des tests ! 



//Import de React
import React from 'react';

//Import de la liste de scomposents pour reactstrap
import {
Pagination,
PaginationItem,
PaginationLink,
} from 'reactstrap';

class PaginationClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        test : console.log("test props", props),
        currentPage : 0,
        pagesCount : props.pagesCount,
    };
  }

  paginationCountNegatif = (e, count) => {
    e.preventDefault();
    this.setState({
      currentPage: this.state.currentPage-count
    })
  }
  
  paginationCountPositif = (e, count) => {
    e.preventDefault();
    this.setState({
      currentPage: this.state.currentPage+count
    })
  }

  render() {
    return (
        <div>
                <Pagination aria-label="Page navigation example" className='paginationCenter'>
                  {this.state.currentPage <= 2 ? 
                    <div>
                      {/* {console.log("Oui multi par 3", "this.state.currentPage", this.state.currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink first/>
                      </PaginationItem>
                    </div>
                  : 
                    <div> 
                      {/* {console.log("Non multi par 3 ", 'this.state.currentPage', this.state.currentPage)} */}
                      <PaginationItem  onClick={e=> this.paginationCountNegatif(e,3)}>
                        <PaginationLink first/>
                      </PaginationItem>
                    </div>
                  }
                  {this.state.currentPage <= 0?
                    <div>
                      {/* {console.log('Oui Negatif', 'CurentPage', this.state.currentPage, ' PageCount', this.pagesCount)} */}
                      <PaginationItem disabled>
                        <PaginationLink previous/>
                      </PaginationItem>
                    </div>
                   :
                    <div>
                      {/* {console.log('Non negatif', 'this.state.currentPage', this.state.currentPage, 'PageCount', this.pagesCount)} */}
                      <PaginationItem onClick={e=> this.paginationCountNegatif(e,1)}>
                        <PaginationLink previous/>
                      </PaginationItem>
                    </div>
                   }
                  {this.state.currentPage <= 0?
                    <div>
                      {/* {console.log('Oui Negatif', 'CurentPage', this.state.currentPage, ' PageCount', this.pagesCount)} */}
                    </div>
                   :
                    <div>
                      {/* {console.log('Non negatif', 'this.state.currentPage', this.state.currentPage, 'PageCount', this.pagesCount)} */}
                      <PaginationItem>
                        <PaginationLink onClick={e=> this.paginationCountNegatif(e,1)}>
                          {this.state.currentPage+1 - 1}
                        </PaginationLink>
                      </PaginationItem>
                    </div>
                   }
                  {/* Affichage de la pagination */}
                  {[...Array(this.pagesCount)].map((page, i) => 
                    <div>
                      {/* {console.log('Current Dans Map', this.state.this.state.currentPage)} */}
                      <PaginationItem  active={this.state.currentPage+1} key={i}>
                      {/* Condition si on dépase de 29 pages de la pagination on ne r'ajoute plus de pagination */}
                      { i <= 0? 

                          <PaginationLink>
                          {this.state.currentPage+ 1} 
                          </PaginationLink>
                      :
                      ""
                      }
                      </PaginationItem>
                    </div>
                  )}
                  { this.pagesCount-1 <= this.state.currentPage ?
                    <div>
                    {/* {console.log("test oui", "pageSige", this.pagesCount, "this.state.currentPage", this.state.currentPage)} */}
                    </div>
                   :
                    <div>
                    {/* {console.log("test non", "pageSige", this.pagesCount, "this.state.currentPage", this.state.currentPage)} */}
                    <PaginationItem>
                      <PaginationLink  onClick={e=> this.paginationCountPositif(e,1)}>
                        {this.state.currentPage+1 + 1}
                      </PaginationLink>
                    </PaginationItem>
                    </div>
                  }
                  {this.pagesCount-1 <= this.state.currentPage ?
                    <div>
                      {/* {console.log("test oui", "pageSige", this.pagesCount, "this.state.currentPage", this.state.currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink next/>
                      </PaginationItem>
                    </div>
                  :
                    <div>
                      {/* {console.log("test non", "pageSige", this.pagesCount, "this.state.currentPage", this.state.currentPage)} */}
                      <PaginationItem>
                        <PaginationLink next onClick={e=> this.paginationCountPositif(e,1)} />
                      </PaginationItem>
                    </div>
                  }
                  {  this.state.currentPage >= this.pagesCount-3 ? 
                    <div>
                      {/* {console.log("Oui Page count", "PagesCount- Button de fin", this.pagesCount-1, "this.state.currentPages - Button de fin", this.state.currentPage)} */}
                      <PaginationItem disabled>
                        <PaginationLink last/>
                      </PaginationItem>
                    </div>
                  :
                    <div>
                      {/* {console.log("Non page count","PagesCount- Button de fin", this.pagesCount-1, "this.state.currentPages - Button de fin", this.state.currentPage)}       */}
                      <PaginationItem>
                        <PaginationLink last onClick={e=> this.paginationCountPositif(e,3)}/>
                      </PaginationItem>
                    </div>          
                  }
                </Pagination>     
        </div>
    );
  }
}

export default PaginationClass;