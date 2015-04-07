//Bootsshop-----------------------//
$(document).ready(function(){	
	$('.subMenu > a').click(function(e)
	{
		e.preventDefault();
		var subMenu = $(this).siblings('ul');
		var li = $(this).parents('li');
		var subMenus = $('#sidebar li.subMenu ul');
		var subMenus_parents = $('#sidebar li.subMenu');
		if(li.hasClass('open'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				subMenu.slideUp();
			} else {
				subMenu.fadeOut(250);
			}
			li.removeClass('open');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				subMenus.slideUp();			
				subMenu.slideDown();
			} else {
				subMenus.fadeOut(250);			
				subMenu.fadeIn(250);
			}
			subMenus_parents.removeClass('open');		
			li.addClass('open');	
		}
	});
	var ul = $('#sidebar > ul');
	$('#sidebar > a').click(function(e)
	{
		e.preventDefault();
		var sidebar = $('#sidebar');
		if(sidebar.hasClass('open'))
		{
			sidebar.removeClass('open');
			ul.slideUp(250);
		} else 
		{
			sidebar.addClass('open');
			ul.slideDown(250);
		}
	});
	
	
	
	// ----- Resize window related -----  //
	$(window).resize(function()
	{
		if($(window).width() > 479)
		{
			//ul.css({'display':'block'});		
		$('#sidebar').removeClass('collapse');
		$('#sidebar').css({
			position:'',
			left:'',
			top:'',
			background:'',
			width:''
			});	
		}
		if($(window).width() < 479)
		{
		$('#sidebar').addClass('collapse');
		$('#sidebar').css({
		position:'absolute',
		left:'0',
		top:'80px',
		background:'#fff',
		width:'100%'		
		});
			fix_position();
		}
		if($(window).width() > 768)
		{
			//$('#user-nav > ul').css({width:'auto',margin:'0'});
            //$('#content-header .btn-group').css({width:'auto'});
		}
	});
	
	if($(window).width() < 468)
	{	$('#sidebar').addClass('collapse');
		$('#sidebar').css({
		position:'absolute',
		left:'0',
		top:'80px',
		background:'#fff',
		width:'100%'		
		});
		//ul.css({'display':'none'});
		fix_position();
	}
	if($(window).width() > 479)
	{	$('#sidebar').removeClass('collapse');
		$('#sidebar').css({
		position:'',
		left:'',
		top:'',
		background:'',
		width:''		
		});
	}
	
	

});