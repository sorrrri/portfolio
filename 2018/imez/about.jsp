<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<div class="sub about">
	<div class="section section_01">
		<div class="title">회사 소개</div>
	</div>
	<div class="section section_02 wrapper">
		<h1>GHSoft</h1>
		<div class="deco"></div>
		<h3>GhSoft는 KOSDAQ 상장사인 ㈜핸디소프트의 자회사로<br />국내 유일의 ISO 인증 표준을 통합 관리하는 클라우드 SaaS 서비스 기업입니다.</h3>
	</div>
	<div class="section section_03 wrapper"></div>
	<div class="section section_04 wrapper"></div>
	<div class="section section_05 wrapper"></div>
	<div class="section section_06 wrapper"></div>
	<div class="section section_07 wrapper">
		<h1>오시는 길</h1>
		<div class="deco"></div>
		<h3>경기도 용인시 수지구 신수로 767 A동 지식산업센터 604호 (분당수지 U-TOWER)</h3>
		<div id="map"></div>
	    <script>
	      function initMap() {
	        var ghsoft = {lat: 37.338291, lng: 127.101987};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 16,
	          center: ghsoft
	        });
	        var marker = new google.maps.Marker({
	          position: ghsoft,
	          map: map
	        });
	      }
	    </script>
	    <script async defer
	    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6APdH_jVoTW1tBefFYRBONQyx6kThmXw&callback=initMap">
	    </script>
	    <a href="http://naver.me/xPCvmOvE" target="_blank"><button>찾아오시는 길</button></a>
	</div>
</div>
<%@ include file="footer.jsp" %>