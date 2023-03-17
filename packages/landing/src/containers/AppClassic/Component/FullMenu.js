import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from 'mdb-react-ui-kit';

const FullMenu = () => {
  return (
    
      <MDBContainer fluid>
        <MDBNavbarNav className='me-auto ps-lg-0' style={{ paddingLeft: '0.15rem' }}>
          
        <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
                Mega 
              </MDBDropdownToggle>
              <MDBDropdownMenu
                className='mt-0 w-100 justify-content-center'
                style={{
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                }}
              >
                <MDBContainer>
                  <MDBRow className='my-4'>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase font-weight-bold' tag='a' href='#' action>
                          Lorem ipsum
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Dolor sit
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Amet consectetur
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Adipisicing elit
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase font-weight-bold' tag='a' href='#' action>
                          Explicabo voluptas
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Perspiciatis quo
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laudantium maiores
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Provident dolor
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase font-weight-bold' tag='a' href='#' action>
                          Iste quaerato
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Est iure
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Praesentium
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laboriosam
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase font-weight-bold' tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Saepe
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Vel alias
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Sunt doloribus
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cum dolores
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
              Shubham link
            </MDBNavbarLink>
          </MDBNavbarItem>

          
        </MDBNavbarNav>
      </MDBContainer>
    
  );
}

export default FullMenu;