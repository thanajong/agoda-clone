import '../components/TileHeader.css'

const TileHeader = () => {
	return (
		<section className='tile-container-section'>
			<div id='background-image-wrapper'>
				<div className='background'>
				</div>
			</div>	
			<section className='tile-container-column'>
				<div className='tile-container-wrapper'>
					<div className='welcome-message-banner'>
						<div className='welcome-message-wrapper'>
							<h1 className='banner'>See the world for less</h1>
							<h2></h2>
						</div>
					</div>
					<div className='booking-box box'>
						<div className='tabs-container'>
							<ul role='tablist' className='box tablist'>
								<li id='tab-all-rooms' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg
											className='link-component-img'
											role='img' 
											xmlns="http://www.w3.org/2000/svg" 
											fill="#000000" 
											height="1em" 
											width="1em" 
											viewBox="0 0 400 400">
												<path d="M272.715,376.603v-10.67V97.913V44.338V33.623h-35.146L127.285,0v365.934v10.67h-17.408V400h180.246v-23.397H272.715z   M189.063,70.276h21.875v21.872h-21.875V70.276z M189.063,114.614h21.875v21.872h-21.875V114.614z M189.063,158.952h21.875v21.872  h-21.875V158.952z M189.063,203.29h21.875v21.872h-21.875V203.29z M189.063,291.963h21.875v21.875h-21.875V291.963z M166.6,313.838  h-21.875v-21.875H166.6V313.838z M166.6,269.5h-21.875v-21.873H166.6V269.5z M166.6,225.162h-21.875V203.29H166.6V225.162z   M166.6,180.824h-21.875v-21.872H166.6V180.824z M166.6,92.148h-21.875V70.276H166.6V92.148z M218.618,376.603h-37.236v-29.366  h37.236V376.603z M255.275,269.5H233.4v-21.873h21.875V269.5z M255.275,225.162H233.4V203.29h21.875V225.162z M255.275,136.486  H233.4v-21.872h21.875V136.486z M255.275,92.148H233.4V70.276h21.875V92.148z"/>
											</svg>
											<h6 className='kite-box-typography'>Hotels</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
								<li id='tab-home' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg
											className='link-component-img'
											role='img' 
											xmlns="http://www.w3.org/2000/svg" 
											fill="#000000" 
											height="1em" 
											width="1em" 
											viewBox="0 0 1024 1024">
												<path d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"/>
											</svg>
											<h6 className='kite-box-typography'>Homes & Apts</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
								<li id='tab-packages-tab' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg
											className='link-component-img'
											role='img' 
											xmlns="http://www.w3.org/2000/svg" 
											fill="#000000" 
											height="1em" 
											width="1em" 
											viewBox="0 0 24 24">
												<path d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z"/>
											</svg>
											<h6 className='kite-box-typography'>Flight + Hotel</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
								<li id='tab-flight-tab' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg
											className='link-component-img'
											role='img' 
											xmlns="http://www.w3.org/2000/svg" 
											fill="#000000" 
											height="1em" 
											width="1em" 
											viewBox="-2.5 0 19 19">
												<path d="M12.382 5.304 10.096 7.59l.006.02L11.838 14a.908.908 0 0 1-.211.794l-.573.573a.339.339 0 0 1-.566-.08l-2.348-4.25-.745-.746-1.97 1.97a3.311 3.311 0 0 1-.75.504l.44 1.447a.875.875 0 0 1-.199.79l-.175.176a.477.477 0 0 1-.672 0l-1.04-1.039-.018-.02-.788-.786-.02-.02-1.038-1.039a.477.477 0 0 1 0-.672l.176-.176a.875.875 0 0 1 .79-.197l1.447.438a3.322 3.322 0 0 1 .504-.75l1.97-1.97-.746-.744-4.25-2.348a.339.339 0 0 1-.08-.566l.573-.573a.909.909 0 0 1 .794-.211l6.39 1.736.02.006 2.286-2.286c.37-.372 1.621-1.02 1.993-.65.37.372-.279 1.622-.65 1.993z	"/>
											</svg>
											<h6 className='kite-box-typography'>Flights</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
								<li id='tab-activities-tab' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg 
											className='link-component-img'
											role='img'
											xmlns="http://www.w3.org/2000/svg" 
											width="1em" 
											height="1em"
											viewBox="0 0 24 24" 
											fill="none">
												<path 
												fillRule="evenodd" 
												clip-rule="evenodd" 
												d="M13.6976 3.07336C13.5072 2.31307 12.8193 1.75 12 1.75C11.1808 1.75 10.493 2.31295 10.3024 3.07312C10.2696 3.08978 10.237 3.10695 10.2046 3.12464L5.41033 5.73881C5.32768 5.78387 5.24718 5.83179 5.16891 5.88239C4.96283 5.79708 4.73691 5.75 4.5 5.75C3.5335 5.75 2.75 6.5335 2.75 7.5C2.75 8.07596 3.02825 8.58694 3.45765 8.90584C3.45626 8.94751 3.45557 8.98928 3.45557 9.03117V13.9688C3.45557 14.1693 3.47157 14.3675 3.50266 14.5618C3.04779 14.8779 2.75 15.4041 2.75 16C2.75 16.9665 3.5335 17.75 4.5 17.75C4.91556 17.75 5.29729 17.6052 5.59745 17.3632L6.90514 18.0763L4.85105 21.6242C4.64352 21.9827 4.76588 22.4415 5.12435 22.6491C5.48282 22.8566 5.94166 22.7342 6.14919 22.3758L8.22252 18.7946L10.2046 19.8753C10.237 19.893 10.2696 19.9102 10.3024 19.9269C10.493 20.687 11.1807 21.25 12 21.25C12.8193 21.25 13.5072 20.6869 13.6976 19.9266C13.7303 19.91 13.7628 19.8929 13.795 19.8753L15.7776 18.7943L17.8511 22.3758C18.0586 22.7342 18.5174 22.8566 18.8759 22.6491C19.2344 22.4415 19.3567 21.9827 19.1492 21.6242L17.0949 18.076L18.4024 17.3631C18.7026 17.6051 19.0844 17.75 19.5 17.75C20.4665 17.75 21.25 16.9665 21.25 16C21.25 15.404 20.952 14.8776 20.497 14.5616C20.528 14.3673 20.544 14.1692 20.544 13.9688V9.03117C20.544 8.98938 20.5433 8.94771 20.5419 8.90614C20.9716 8.58726 21.25 8.07615 21.25 7.5C21.25 6.5335 20.4665 5.75 19.5 5.75C19.263 5.75 19.037 5.79712 18.8308 5.88249C18.7525 5.83185 18.672 5.78391 18.5893 5.73881L13.795 3.12464C13.7628 3.10703 13.7303 3.08994 13.6976 3.07336ZM10.6368 4.59745C10.9576 4.9954 11.4491 5.25 12 5.25C12.5509 5.25 13.0423 4.99547 13.3631 4.5976L17.8152 7.02522C17.7727 7.1762 17.75 7.33545 17.75 7.5C17.75 8.30876 18.2986 8.98938 19.044 9.19V13.9688C19.044 14.0867 19.0348 14.2032 19.0169 14.3175C18.2853 14.5272 17.75 15.2011 17.75 16C17.75 16.0034 17.75 16.0069 17.75 16.0103L16.3431 16.7774L13.6516 12.1284C13.8715 11.8072 14.0001 11.4186 14.0001 11C14.0001 9.89543 13.1047 9 12.0001 9C10.8956 9 10.0001 9.89543 10.0001 11C10.0001 11.4186 10.1287 11.8072 10.3486 12.1284L7.65694 16.7777L6.24997 16.0105C6.24999 16.007 6.25 16.0035 6.25 16C6.25 15.2009 5.71444 14.5269 4.98269 14.3174C4.96478 14.2031 4.95557 14.0866 4.95557 13.9688V9.19011C5.70117 8.98963 6.25 8.30891 6.25 7.5C6.25 7.33538 6.22727 7.17606 6.18477 7.02503L10.6368 4.59745ZM8.97432 17.496L10.6368 18.4025C10.9576 18.0046 11.4491 17.75 12 17.75C12.5509 17.75 13.0423 18.0045 13.3631 18.4024L15.0258 17.4957L12.3998 12.96C12.2707 12.9862 12.137 13 12.0001 13C11.8632 13 11.7296 12.9862 11.6004 12.96L8.97432 17.496Z" 
												fill="#1C274C"/>
											</svg>
											<h6 className='kite-box-typography'>Activities</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
								<li id='tab-journey-tab' role='tab' tabindex='0' dataselected='true' className='box link-component-container'>
									<div className='link-component-label'>
										<div className='kite-box box'>
											<svg
											className='link-component-img'
											role='img' 
											xmlns="http://www.w3.org/2000/svg" 
											fill="#000000" 
											height="1em" 
											width="1em" 
											viewBox="-4 0 32 32">
												<path d="M19.938 7.188l3.563 7.156c0.063 0.094 0.094 0.219 0.125 0.313 0.219 0.563 0.375 1.344 0.375 1.844v3.406c0 1.063-0.719 1.938-1.719 2.188v2c0 0.969-0.781 1.719-1.719 1.719-0.969 0-1.719-0.75-1.719-1.719v-1.938h-13.688v1.938c0 0.969-0.75 1.719-1.719 1.719-0.938 0-1.719-0.75-1.719-1.719v-2c-1-0.25-1.719-1.125-1.719-2.188v-3.406c0-0.5 0.156-1.281 0.375-1.844 0.031-0.094 0.063-0.219 0.125-0.313l3.563-7.156c0.281-0.531 1.031-1.031 1.656-1.031h12.563c0.625 0 1.375 0.5 1.656 1.031zM5.531 9.344l-1.906 4.344c-0.094 0.156-0.094 0.344-0.094 0.469h16.938c0-0.125 0-0.313-0.094-0.469l-1.906-4.344c-0.25-0.563-1-1.063-1.594-1.063h-9.75c-0.594 0-1.344 0.5-1.594 1.063zM4.688 19.906c1 0 1.781-0.813 1.781-1.844 0-1-0.781-1.781-1.781-1.781s-1.844 0.781-1.844 1.781c0 1.031 0.844 1.844 1.844 1.844zM19.313 19.906c1 0 1.844-0.813 1.844-1.844 0-1-0.844-1.781-1.844-1.781s-1.781 0.781-1.781 1.781c0 1.031 0.781 1.844 1.781 1.844z"/>
											</svg>
											<h6 className='kite-box-typography'>Airport transfer</h6>
										</div>
										<div className='link-component-underline box'>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className='tab-panel'>
						</div>	 
					</div>
				</div>
			</section>		
		</section>
	);
}

export default TileHeader;