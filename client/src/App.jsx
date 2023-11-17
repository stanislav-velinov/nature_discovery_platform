import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <>
  {/* META DATA */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
  {/*font-family*/}
  <link
    href="https://fonts.googleapis.com/css?family=Rufina:400,700"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
    rel="stylesheet"
  />
  {/* TITLE OF SITE */}
  <title>Travel</title>
  {/* favicon img */}
  <link rel="shortcut icon" type="image/icon" href="assets/logo/favicon.png" />
  {/*font-awesome.min.css*/}
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  {/*animate.css*/}
  <link rel="stylesheet" href="assets/css/animate.css" />
  {/*hover.css*/}
  <link rel="stylesheet" href="assets/css/hover-min.css" />
  {/*datepicker.css*/}
  <link rel="stylesheet" href="assets/css/datepicker.css" />
  {/*owl.carousel.css*/}
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  {/* range css*/}
  <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
  {/*bootstrap.min.css*/}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  {/* bootsnav */}
  <link rel="stylesheet" href="assets/css/bootsnav.css" />
  {/*style.css*/}
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*responsive.css*/}
  <link rel="stylesheet" href="assets/css/responsive.css" />
  {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
  {/*[if lt IE 9]>
		
		
		<![endif]*/}
  {/*[if lte IE 9]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
			your browser</a> to improve your experience and security.</p>
		<![endif]*/}
  {/* main-menu Start */}
  <header className="top-area">
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="logo">
              <a href="index.html">
                tour<span>Nest</span>
              </a>
            </div>
            {/* /.logo*/}
          </div>
          {/* /.col*/}
          <div className="col-sm-10">
            <div className="main-menu">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <i className="fa fa-bars" />
                </button>
                {/* / button*/}
              </div>
              {/* /.navbar-header*/}
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="smooth-menu">
                    <a href="#home">home</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#gallery">Destination</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#pack">Packages </a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#spo">Special Offers</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#blog">blog</a>
                  </li>
                  <li className="smooth-menu">
                    <a href="#subs">subscription</a>
                  </li>
                  <li>
                    <button className="book-btn">book now</button>
                  </li>
                  {/*/.project-btn*/}
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* /.main-menu*/}
          </div>
          {/* /.col*/}
        </div>
        {/* /.row */}
        <div className="home-border" />
        {/* /.home-border*/}
      </div>
      {/* /.container*/}
    </div>
    {/* /.header-area */}
  </header>
  {/* /.top-area*/}
  {/* main-menu End */}
  {/*about-us start */}
  <section id="home" className="about-us">
    <div className="container">
      <div className="about-us-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="single-about-us">
              <div className="about-us-txt">
                <h2>Explore the Beauty of the Beautiful World</h2>
                <div className="about-btn">
                  <button className="about-view">explore now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.about-us-txt*/}
            </div>
            {/*/.single-about-us*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-0">
            <div className="single-about-us"></div>
            {/*/.single-about-us*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.about-us-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.about-us*/}
  {/*about-us end */}
  {/*travel-box start*/}
  <section className="travel-box">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="single-travel-boxes">
            <div id="desc-tabs" className="desc-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#tours"
                    aria-controls="tours"
                    role="tab"
                    data-toggle="tab"
                  >
                    <i className="fa fa-tree" />
                    tours
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#hotels"
                    aria-controls="hotels"
                    role="tab"
                    data-toggle="tab"
                  >
                    <i className="fa fa-building" />
                    hotels
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#flights"
                    aria-controls="flights"
                    role="tab"
                    data-toggle="tab"
                  >
                    <i className="fa fa-plane" />
                    flights
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active fade in"
                  id="tours"
                >
                  <div className="tab-para">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>destination</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your destination country
                              </option>
                              {/* /.option*/}
                              <option value="turkey">turkey</option>
                              {/* /.option*/}
                              <option value="russia">russia</option>
                              {/* /.option*/}
                              <option value="egept">egypt</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your destination location
                              </option>
                              {/* /.option*/}
                              <option value="istambul">istambul</option>
                              {/* /.option*/}
                              <option value="mosko">mosko</option>
                              {/* /.option*/}
                              <option value="cairo">cairo</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>check in</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_in"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="12 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>check out</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_out"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="22 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>duration</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">5</option>
                              {/* /.option*/}
                              <option value={10}>10</option>
                              {/* /.option*/}
                              <option value={15}>15</option>
                              {/* /.option*/}
                              <option value={20}>20</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>members</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">1</option>
                              {/* /.option*/}
                              <option value={2}>2</option>
                              {/* /.option*/}
                              <option value={4}>4</option>
                              {/* /.option*/}
                              <option value={8}>8</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="travel-budget">
                          <div className="row">
                            <div className="col-md-3 col-sm-4">
                              <h3>budget : </h3>
                            </div>
                            {/*/.col*/}
                            <div className="co-md-9 col-sm-8">
                              <div className="travel-filter">
                                <div className="info_widget">
                                  <div className="price_filter">
                                    <div id="slider-range" />
                                    {/*/.slider-range*/}
                                    <div className="price_slider_amount">
                                      <input
                                        type="text"
                                        id="amount"
                                        name="price"
                                        placeholder="Add Your Price"
                                      />
                                    </div>
                                    {/*/.price_slider_amount*/}
                                  </div>
                                  {/*/.price-filter*/}
                                </div>
                                {/*/.info_widget*/}
                              </div>
                              {/*/.travel-filter*/}
                            </div>
                            {/*/.col*/}
                          </div>
                          {/*/.row*/}
                        </div>
                        {/*/.travel-budget*/}
                      </div>
                      {/*/.col*/}
                      <div className="clo-sm-7">
                        <div className="about-btn travel-mrt-0 pull-right">
                          <button className="about-view travel-btn">
                            search
                          </button>
                          {/*/.travel-btn*/}
                        </div>
                        {/*/.about-btn*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                  </div>
                  {/*/.tab-para*/}
                </div>
                {/*/.tabpannel*/}
                <div role="tabpanel" className="tab-pane fade in" id="hotels">
                  <div className="tab-para">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>destination</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your destination country
                              </option>
                              {/* /.option*/}
                              <option value="turkey">turkey</option>
                              {/* /.option*/}
                              <option value="russia">russia</option>
                              {/* /.option*/}
                              <option value="egept">egypt</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your destination location
                              </option>
                              {/* /.option*/}
                              <option value="istambul">istambul</option>
                              {/* /.option*/}
                              <option value="mosko">mosko</option>
                              {/* /.option*/}
                              <option value="cairo">cairo</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>check in</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_in"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="12 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>check out</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_out"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="22 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>duration</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">5</option>
                              {/* /.option*/}
                              <option value={10}>10</option>
                              {/* /.option*/}
                              <option value={15}>15</option>
                              {/* /.option*/}
                              <option value={20}>20</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>members</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">1</option>
                              {/* /.option*/}
                              <option value={2}>2</option>
                              {/* /.option*/}
                              <option value={4}>4</option>
                              {/* /.option*/}
                              <option value={8}>8</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-sm-5" />
                      {/*/.col*/}
                      <div className="clo-sm-7">
                        <div className="about-btn travel-mrt-0 pull-right">
                          <button className="about-view travel-btn">
                            search
                          </button>
                          {/*/.travel-btn*/}
                        </div>
                        {/*/.about-btn*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                  </div>
                  {/*/.tab-para*/}
                </div>
                {/*/.tabpannel*/}
                <div role="tabpanel" className="tab-pane fade in" id="flights">
                  <div className="tab-para">
                    <div className="trip-circle">
                      <div className="single-trip-circle">
                        <input type="radio" id="radio01" name="radio" />
                        <label htmlFor="radio01">
                          <span className="round-boarder">
                            <span className="round-boarder1" />
                          </span>
                          round trip
                        </label>
                      </div>
                      {/*/.single-trip-circle*/}
                      <div className="single-trip-circle">
                        <input type="radio" id="radio02" name="radio" />
                        <label htmlFor="radio02">
                          <span className="round-boarder">
                            <span className="round-boarder1" />
                          </span>
                          on way
                        </label>
                      </div>
                      {/*/.single-trip-circle*/}
                    </div>
                    {/*/.trip-circle*/}
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>from</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your location
                              </option>
                              {/* /.option*/}
                              <option value="turkey">turkey</option>
                              {/* /.option*/}
                              <option value="russia">russia</option>
                              {/* /.option*/}
                              <option value="egept">egypt</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>departure</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="departure"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="12 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>return</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="return"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="22 -01 - 2017 "
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>adults</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">5</option>
                              {/* /.option*/}
                              <option value={10}>10</option>
                              {/* /.option*/}
                              <option value={15}>15</option>
                              {/* /.option*/}
                              <option value={20}>20</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>childs</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">1</option>
                              {/* /.option*/}
                              <option value={2}>2</option>
                              {/* /.option*/}
                              <option value={4}>4</option>
                              {/* /.option*/}
                              <option value={8}>8</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>to</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">
                                enter your destination location
                              </option>
                              {/* /.option*/}
                              <option value="istambul">istambul</option>
                              {/* /.option*/}
                              <option value="mosko">mosko</option>
                              {/* /.option*/}
                              <option value="cairo">cairo</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>class</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
                              <option value="default">enter class</option>
                              {/* /.option*/}
                              <option value="A">A</option>
                              {/* /.option*/}
                              <option value="B">B</option>
                              {/* /.option*/}
                              <option value="C">C</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="clo-sm-5">
                        <div className="about-btn pull-right">
                          <button className="about-view travel-btn">
                            search
                          </button>
                          {/*/.travel-btn*/}
                        </div>
                        {/*/.about-btn*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                  </div>
                </div>
                {/*/.tabpannel*/}
              </div>
              {/*/.tab content*/}
            </div>
            {/*/.desc-tabs*/}
          </div>
          {/*/.single-travel-box*/}
        </div>
        {/*/.col*/}
      </div>
      {/*/.row*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.travel-box*/}
  {/*travel-box end*/}
  {/*service start*/}
  <section id="service" className="service">
    <div className="container">
      <div className="service-counter text-center">
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="service-img">
              <img src="assets/images/service/s1.png" alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">amazing tour packages</a>
              </h2>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla.
              </p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="service-img">
              <img src="assets/images/service/s2.png" alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">book top class hotel</a>
              </h2>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla.
              </p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="statistics-img">
              <img src="assets/images/service/s3.png" alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">online flight booking</a>
              </h2>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla.
              </p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
      </div>
      {/*/.statistics-counter*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.service*/}
  {/*service end*/}
  {/*galley start*/}
  <section id="gallery" className="gallery">
    <div className="container">
      <div className="gallery-details">
        <div className="gallary-header text-center">
          <h2>top destination</h2>
          <p>
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>
        {/*/.gallery-header*/}
        <div className="gallery-box">
          <div className="gallery-content">
            <div className="filtr-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g1.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">china</a>
                      <p>
                        <span>20 tours</span>
                        <span>15 places</span>
                      </p>
                    </div>
                    {/* /.item-title */}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
                <div className="col-md-6">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g2.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">venuzuala</a>
                      <p>
                        <span>12 tours</span>
                        <span>9 places</span>
                      </p>
                    </div>{" "}
                    {/* /.item-title*/}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g3.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">brazil</a>
                      <p>
                        <span>25 tours</span>
                        <span>10 places</span>
                      </p>
                    </div>
                    {/* /.item-title */}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g4.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">australia</a>
                      <p>
                        <span>18 tours</span>
                        <span>9 places</span>
                      </p>
                    </div>{" "}
                    {/* /.item-title*/}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g5.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">netharland</a>
                      <p>
                        <span>14 tours</span>
                        <span>12 places</span>
                      </p>
                    </div>{" "}
                    {/* /.item-title*/}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
                <div className="col-md-8">
                  <div className="filtr-item">
                    <img
                      src="assets/images/gallary/g6.jpg"
                      alt="portfolio image"
                    />
                    <div className="item-title">
                      <a href="#">turkey</a>
                      <p>
                        <span>14 tours</span>
                        <span>6 places</span>
                      </p>
                    </div>{" "}
                    {/* /.item-title*/}
                  </div>
                  {/* /.filtr-item */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.filtr-container*/}
          </div>
          {/* /.gallery-content */}
        </div>
        {/*/.galley-box*/}
      </div>
      {/*/.gallery-details*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.gallery*/}
  {/*gallery end*/}
  {/*discount-offer start*/}
  <section className="discount-offer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="dicount-offer-content text-center">
            <h2>
              Join with us within 21 January, 2018 and get upto 40% Discount
            </h2>
            <div className="campaign-timer">
              <div id="timer">
                <div className="time time-after" id="days">
                  <span />
                </div>
                {/*/.time*/}
                <div className="time time-after" id="hours"></div>
                {/*/.time*/}
                <div className="time time-after" id="minutes"></div>
                {/*/.time*/}
                <div className="time" id="seconds"></div>
                {/*/.time*/}
              </div>
              {/*/.timer*/}
            </div>
            {/*/.campaign-timer*/}
            <div className="about-btn">
              <button className="about-view discount-offer-btn">
                join now
              </button>
            </div>
            {/*/.about-btn*/}
          </div>
          {/* /.dicount-offer-content*/}
        </div>
        {/* /.col*/}
      </div>
      {/* /.row*/}
    </div>
    {/* /.container*/}
  </section>
  {/* /.discount-offer*/}
  {/*discount-offer end*/}
  {/*packages start*/}
  <section id="pack" className="packages">
    <div className="container">
      <div className="gallary-header text-center">
        <h2>special packages</h2>
        <p>
          Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
      {/*/.gallery-header*/}
      <div className="packages-content">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p1.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  italy <span className="pull-right">$499</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p2.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  england <span className="pull-right">$1499</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p3.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  france <span className="pull-right">$1199</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p4.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  india <span className="pull-right">$799</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p5.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  spain <span className="pull-right">$999</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
          <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
              <img src="assets/images/packages/p6.jpg" alt="package-place" />
              <div className="single-package-item-txt">
                <h3>
                  thailand <span className="pull-right">$799</span>
                </h3>
                <div className="packages-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <i className="fa fa-angle-right" /> 5 star accomodation
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <i className="fa fa-angle-right" /> food facilities
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="packages-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="about-btn">
                  <button className="about-view packages-btn">book now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.single-package-item-txt*/}
            </div>
            {/*/.single-package-item*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.packages-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.packages*/}
  {/*packages end*/}
  {/* testemonial Start */}
  <section className="testemonial">
    <div className="container">
      <div className="gallary-header text-center">
        <h2>clients reviews</h2>
        <p>
          Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
      {/*/.gallery-header*/}
      <div className="owl-carousel owl-theme" id="testemonial-carousel">
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial2.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial2.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial2.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
        <div className="home1-testm item">
          <div className="home1-testm-single text-center">
            <div className="home1-testm-img">
              <img src="assets/images/client/testimonial1.jpg" alt="img" />
            </div>
            {/*/.home1-testm-img*/}
            <div className="home1-testm-txt">
              <span className="icon section-icon">
                <i className="fa fa-quote-left" aria-hidden="true" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <h3>
                <a href="#">kevin watson</a>
              </h3>
              <h4>london, england</h4>
            </div>
            {/*/.home1-testm-txt*/}
          </div>
          {/*/.home1-testm-single*/}
        </div>
        {/*/.item*/}
      </div>
      {/*/.testemonial-carousel*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.testimonial*/}
  {/* testemonial End */}
  {/*special-offer start*/}
  <section id="spo" className="special-offer">
    <div className="container">
      <div className="special-offer-content">
        <div className="row">
          <div className="col-sm-8">
            <div className="single-special-offer">
              <div className="single-special-offer-txt">
                <h2>thiland</h2>
                <div className="packages-review special-offer-review">
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="packages-para special-offer-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 daays 6 nights
                    </span>
                    <span>
                      <i className="fa fa-angle-right" /> 2 person
                    </span>
                    <span>
                      <i className="fa fa-angle-right" /> 5 star accomodation
                    </span>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> transportation
                    </span>
                    <span>
                      <i className="fa fa-angle-right" /> food facilities
                    </span>
                  </p>
                  <p className="offer-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation una <br />{" "}
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="offer-btn-group">
                  <div className="about-btn">
                    <button className="about-view packages-btn offfer-btn">
                      make tour
                    </button>
                  </div>
                  {/*/.about-btn*/}
                  <div className="about-btn">
                    <button className="about-view packages-btn">
                      book now
                    </button>
                  </div>
                  {/*/.about-btn*/}
                </div>
                {/*/.offer-btn-group*/}
              </div>
              {/*/.single-special-offer-txt*/}
            </div>
            {/*/.single-special-offer*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-4">
            <div className="single-special-offer">
              <div className="single-special-offer-bg">
                <img
                  src="assets/images/offer/offer-shape.png"
                  alt="offer-shape"
                />
              </div>
              {/*/.single-special-offer-bg*/}
              <div className="single-special-shape-txt">
                <h3>special offer</h3>
                <h4>
                  <span>40%</span>
                  <br />
                  off
                </h4>
                <p>
                  <span>$999</span>
                  <br />
                  reguler $ 1450
                </p>
              </div>
              {/*/.single-special-shape-txt*/}
            </div>
            {/*/.single-special-offer*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.special-offer-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.special-offer end*/}
  {/*special-offer end*/}
  {/*blog start*/}
  <section id="blog" className="blog">
    <div className="container">
      <div className="blog-details">
        <div className="gallary-header text-center">
          <h2>latest news</h2>
          <p>Travel News from all over the world</p>
        </div>
        {/*/.gallery-header*/}
        <div className="blog-content">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src="assets/images/blog/b1.jpg" alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">
                        Discover on beautiful weather, Fantastic foods and
                        historical place in Prag
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src="assets/images/blog/b2.jpg" alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">
                        Discover on beautiful weather, Fantastic foods and
                        historical place in india
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src="assets/images/blog/b3.jpg" alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">10 Most Natural place to Discover</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.blog-content*/}
      </div>
      {/*/.blog-details*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.blog*/}
  {/*blog end*/}
  {/*subscribe start*/}
  <section id="subs" className="subscribe">
    <div className="container">
      <div className="subscribe-title text-center">
        <h2>Join our Subscribers List to Get Regular Update</h2>
        <p>Subscribe Now. We will send you Best offer for your Trip</p>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="custom-input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email Here"
              />
              <button className="appsLand-btn subscribe-btn">Subscribe</button>
              <div className="clearfix" />
              <i className="fa fa-envelope" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/*subscribe end*/}
  {/* footer-copyright start */}
  <footer className="footer-copyright">
    <div className="container">
      <div className="footer-content">
        <div className="row">
          <div className="col-sm-3">
            <div className="single-footer-item">
              <div className="footer-logo">
                <a href="index.html">
                  tour<span>Nest</span>
                </a>
                <p>best travel agency</p>
              </div>
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item">
              <h2>link</h2>
              <div className="single-footer-txt">
                <p>
                  <a href="#">home</a>
                </p>
                <p>
                  <a href="#">destination</a>
                </p>
                <p>
                  <a href="#">spacial packages</a>
                </p>
                <p>
                  <a href="#">special offers</a>
                </p>
                <p>
                  <a href="#">blog</a>
                </p>
                <p>
                  <a href="#">contacts</a>
                </p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item">
              <h2>popular destination</h2>
              <div className="single-footer-txt">
                <p>
                  <a href="#">china</a>
                </p>
                <p>
                  <a href="#">venezuela</a>
                </p>
                <p>
                  <a href="#">brazil</a>
                </p>
                <p>
                  <a href="#">australia</a>
                </p>
                <p>
                  <a href="#">london</a>
                </p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item text-center">
              <h2 className="text-left">contacts</h2>
              <div className="single-footer-txt text-left">
                <p>+1 (300) 1234 6543</p>
                <p className="foot-email">
                  <a href="#">info@tnest.com</a>
                </p>
                <p>North Warnner Park 336/A</p>
                <p>Newyork, USA</p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.footer-content*/}
      <hr />
      <div className="foot-icons ">
        <ul className="footer-social-links list-inline list-unstyled">
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-1">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-2">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-3">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
        <p>
          © 2017 <a href="https://www.themesine.com">ThemeSINE</a>. All Right
          Reserved
        </p>
      </div>
      {/*/.foot-icons*/}
      <div id="scroll-Top">
        <i
          className="fa fa-angle-double-up return-to-top"
          id="scroll-top"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Back to Top"
          aria-hidden="true"
        />
      </div>
      {/*/.scroll-Top*/}
    </div>
    {/* /.container*/}
  </footer>
  {/* /.footer-copyright*/}
  {/* footer-copyright end */}
</>

      </div>

    </>
  )
}

export default App
