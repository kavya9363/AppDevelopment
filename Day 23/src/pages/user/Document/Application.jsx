import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Application() {

  const nav=useNavigate();
  const handleApplicationSubmit=()=>{
    nav("/home");
  }

  return (
    <div>
      <>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="navbar navbar-default">
    <div className="container1">
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to='/home'><a href="#">
                <i className="fa fa-home" /> Home
              </a></Link>
            </li>
            <li>
            
              <a href="#">
                <i className="fa fa-bar-chart" /> Payment Status
              </a>
            </li>
           
            <li>
              <a href="#">
                <i className="fa fa-arrow-circle-o-down" /> Application download
              </a>
            </li>
            
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Login{" "}
                <span className="caret" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 well">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title text-center">
              Admission Application Form
            </h3>
          </div>
          <div className="panel-body">
            <form action="" className="form-horizontal row">
              <div className="form-group">
                <label
                  htmlFor="applicant_name"
                  className="control-label col-sm-3"
                >
                  Applicant's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="applicant_name"
                    id="applicant_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="father_name" className="control-label col-sm-3">
                  Father's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="father_name"
                    id="father_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mother_name" className="control-label col-sm-3">
                  Mother's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="mother_name"
                    id="mother_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="date_of_birth"
                  className="control-label col-sm-3"
                >
                  Date of Birth :
                </label>
                <div className="col-sm-2">
                  <select
                    name="date_day"
                    id="date_of_birth"
                    className="form-control"
                  >
                    <option selected="" disabled="" value="">
                      Day
                    </option>
                    <option value={1}>01</option>
                    <option value={2}>02</option>
                    <option value={3}>03</option>
                    <option value={4}>04</option>
                    <option value={5}>05</option>
                    <option value={6}>06</option>
                    <option value={7}>07</option>
                    <option value={8}>08</option>
                    <option value={9}>09</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                  <span className="help-inline" />
                </div>
                <div className="col-sm-2">
                  <select name="date_month" className="form-control">
                    <option selected="" disabled="" value="">
                      Month
                    </option>
                    <option value={1}>01 - January</option>
                    <option value={2}>02 - February</option>
                    <option value={3}>03 - March</option>
                    <option value={4}>04 - April</option>
                    <option value={5}>05 - May</option>
                    <option value={6}>06 - June</option>
                    <option value={7}>07 - July</option>
                    <option value={8}>08 - August</option>
                    <option value={9}>09 - September</option>
                    <option value={10}>10 - October</option>
                    <option value={11}>11 - November</option>
                    <option value={12}>12 - December</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <select name="date_year" className="form-control">
                    <option disabled="" selected="" value="">
                      Year
                    </option>
                    <option value={1955}>1955</option>
                    <option value={1956}>1956</option>
                    <option value={1957}>1957</option>
                    <option value={1958}>1958</option>
                    <option value={1959}>1959</option>
                    <option value={1960}>1960</option>
                    <option value={1961}>1961</option>
                    <option value={1962}>1962</option>
                    <option value={1963}>1963</option>
                    <option value={1964}>1964</option>
                    <option value={1965}>1965</option>
                    <option value={1966}>1966</option>
                    <option value={1967}>1967</option>
                    <option value={1968}>1968</option>
                    <option value={1969}>1969</option>
                    <option value={1970}>1970</option>
                    <option value={1971}>1971</option>
                    <option value={1972}>1972</option>
                    <option value={1973}>1973</option>
                    <option value={1974}>1974</option>
                    <option value={1975}>1975</option>
                    <option value={1976}>1976</option>
                    <option value={1977}>1977</option>
                    <option value={1978}>1978</option>
                    <option value={1979}>1979</option>
                    <option value={1980}>1980</option>
                    <option value={1981}>1981</option>
                    <option value={1982}>1982</option>
                    <option value={1983}>1983</option>
                    <option value={1984}>1984</option>
                    <option value={1985}>1985</option>
                    <option value={1986}>1986</option>
                    <option value={1987}>1987</option>
                    <option value={1988}>1988</option>
                    <option value={1989}>1989</option>
                    <option value={1990}>1990</option>
                    <option value={1991}>1991</option>
                    <option value={1992}>1992</option>
                    <option value={1993}>1993</option>
                    <option value={1994}>1994</option>
                    <option value={1995}>1995</option>
                    <option value={1996}>1996</option>
                    <option value={1997}>1997</option>
                    <option value={1998}>1998</option>
                    <option value={1999}>1999</option>
                    <option value={2000}>2000</option>
                    <option value={2001}>2001</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3" htmlFor="mobile">
                  Mobile :
                </label>
                <div className="col-sm-4">
                  <div className="input-group">
                    <span className="input-group-addon">+91</span>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      maxLength={10}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="control-label col-sm-3">
                  Gender :
                </label>
                <div className="col-sm-2">
                  <select name="gender" id="gender" className="form-control">
                    <option value="" selected="" disabled="">
                      Select
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
                <label htmlFor="religion" className="control-label col-sm-2">
                  Religion :
                </label>
                <div className="col-sm-3">
                  <select
                    name="religion"
                    id="religion"
                    className="form-control"
                  >
                    <option value="" disabled="" selected="">
                      Select
                    </option>
                    <option value="HINDUISM">HINDUISM</option>
                    <option value="CHRISTIANITY">CHRISTIANITY</option>
                    <option value="ISLAM">ISLAM</option>
                    <option value="BUDDHISM">BUDDHISM</option>
                    <option value="JAINISM">JAINISM</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="blood_group" className="control-label col-sm-3">
                  Blood Group :
                </label>
                <div className="col-sm-2">
                  <select
                    name="blood_group"
                    id="blood_group"
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <label htmlFor="nationality" className="control-label col-sm-2">
                  Nationality :
                </label>
                <div className="col-sm-3">
                  <select
                    name="nationality"
                    id="nationality"
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="INDIAN" selected="">
                      Indian
                    </option>
                    <option value="OTHER" selected="">
                      OTHER
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="control-label col-sm-3">
                  Email :
                </label>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="present_address"
                  className="control-label col-sm-3"
                >
                  Present Address :
                </label>
                <div className="col-sm-7">
                  <textarea
                    name="present_address"
                    rows={4}
                    id="present_address"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="permanent_address"
                  className="control-label col-sm-3"
                >
                  Permanent Address :
                </label>
                <div className="col-sm-7">
                  <textarea
                    name="permanent_address"
                    id="permanent_address"
                    rows={3}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <hr />
              <fieldset>
                <legend className="text-center">Academic Qualifications</legend>
                {/* ************ Start of SSC and HSC************** */}
                <div className="row">
                  {/* ************ Start of SSC ************** */}
                  <div className="col-lg-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          Previous Education Details(if any)
                        </h5>
                      </div>
                      <div className="panel-body">
                        
                        <div className="form-group">
                          <label
                            htmlFor="ssc_board"
                            className="control-label col-sm-4"
                          >
                            Board :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_board"
                              id="ssc_board"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="DHAKA">Stateboard</option>
                              <option value="COMILLA">CBSE</option>
                              <option value="RAJSHAHI">ICSE</option>
                              <option value="JESSORE">IGCSE</option>
                              <option value="IGCSE">IGCSE                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_roll_no"
                            className="control-label col-sm-4"
                          >
                            Roll No :
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="ssc_roll_no"
                              id="ssc_roll_no"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-sm-4"
                            htmlFor="ssc_result"
                          >
                            Result :
                          </label>
                          <div className="col-sm-8">
                            <div className="input-group">
                              <span className="input-group-addon">GPA</span>
                              <input
                                type="number"
                                className="form-control"
                                name="ssc_result"
                                id="ssc_result"
                                step="0.01"
                                min={1}
                                max={5}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_pass_year"
                            className="control-label col-sm-4"
                          >
                            Passing Year  :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_pass_year"
                              id="ssc_pass_year"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ************ End of SSC ************** */}
                  {/* ************ Start of HSC ************** */}
                  <div className="col-lg-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          Current Academic 
                        </h5>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label
                            htmlFor="hsc_board"
                            className="control-label col-sm-4"
                          >
                            Board :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_board"
                              id="hsc_board"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="Dhaka">Stateboard</option>
                              <option value="COMILLA">CBSE</option>
                              <option value="RAJSHAHI">ICSE</option>
                              <option value="IGCSE">IGCSE
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_board"
                            className="control-label col-sm-4"
                          >
                            Grade :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_board"
                              id="hsc_board"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="grade">Pre.K.G</option>
                              <option value="grade">L.K.G</option>
                              <option value="grade">U.K.G</option>
                              <option value="grade">1</option>
                              <option value="grade">2</option>
                              <option value="grade">3</option>
                              <option value="grade">4</option>
                              <option value="grade">5</option>
                              <option value="grade">6</option>
                              <option value="grade">7</option>
                              <option value="grade">8</option>
                              <option value="grade">9</option>
                              <option value="grade">10</option>
                              <option value="grade">11</option>
                              <option value="grade">12</option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <label
                            htmlFor="hsc_group"
                            className="control-label col-sm-4"
                          >
                            Group (if any):
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_group"
                              id="hsc_group"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="SCIENCE">Science</option>
                              <option value="HUMANITIES">Humanities</option>
                              <option value="BUSINESS STUDIES">
                                Business Studies
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_pass_year"
                            className="control-label col-sm-4"
                          >
                            Admission Year :
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control"
                              name="hsc_pass_year"
                              id="hsc_pass_year"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ************ End of HSC ************** */}
                </div>
                
                {/* ************ End of Graduation Level************** */}
                {/* ************ Start of Masters Level (if any)************** */}

              </fieldset>
            </form>
          </div>
          <div className="panel-footer">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkbox">
                  <label className="text-warning">
                    <input
                      type="checkbox"
                      id="all_correct"
                      name="all_correct"
                      defaultValue={1}
                    />{" "}
                    I hereby declare that all the above information are correct
                    and assure that I will abide by all the rules.
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-lg-offset-5">
              <Link to="/upload">
  <button
    className="btn btn-success btn-lg btn-block"
    onClick={handleApplicationSubmit}
  >
    Next
  </button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}


export default Application;