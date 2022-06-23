/* function getCommentList ()
{
    $.ajax( {
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        // data: {},
        success: function ( res )
        {
            if ( res.status !== 200 ) return alert( '获取评论列表失败！' );
            let arrData = [];
            $.each( res.data, function ( i, item )
            {
                arrData.push( `
            <li class="list-group-item">
            <span class="badge" style="background-color: #F0AD4E;">${ item.time }</span>
            <span class="badge" style="background-color: #5BC0DE;">${ item.username }</span>
            ${ item.content }
             </li> ` );

            } )
            $( '#cmt-list' ).empty().append( arrData );
        }
    } )
}
getCommentList()
$( function ()
{
    $( '#formAddCmt' ).submit( function ( e )
    {
        e.preventDefault();
        let data = $( this ).serialize();
        // alert( data );
        $.post( 'http://www.liulongbin.top:3006/api/addcmt', data, function ( res )
        {
            if ( res.status !== 201 )
            {
                return alert( '发表评论失败！' )
            }
            getCommentList()
            // jq转为dom对象  1.[索引0开始] 2.get(索引0开始)
            $( '#formAddCmt' )[ 0 ].reset();
        } )
    } )
} ) */
/* function getCommentList ()
{
    $.ajax( {
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function ( res )
        {
            if ( res.status !== 200 )
            {
                return alert( '获取评论列表失败！' )
            }
            let arrData = [];
            $.each( res.data, function ( i, item )
            {
                arrData.push( `
                <li class="list-group-item">
                <span class="badge" style="background-color: #F0AD4E;">${ item.time }</span>
                <span class="badge" style="background-color: #5BC0DE;">${ item.username }</span>
                ${ item.content }
            </li>
                `);
            } )
            $( '#cmt-list' ).empty().append( arrData );
        }
    } )
}
getCommentList()
$( function ()
{
    $( '#formAddCmt' ).submit( function ( e )
    {
        e.preventDefault();
        let data = $( this ).serialize();
        $.ajax( {
            method: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: data,
            success: function ( res )
            {
                if ( res.status !== 201 )
                {
                    return alert( '发表评论失败！' )
                }
                getCommentList()
                $( '#formAddCmt' )[ 0 ].reset()
            }
        } )
    } )

    // 回车提交
    $( 'textarea' ).keyup( function ( e )
    {
        if ( e.keyCode === 13 )
        {
            $( '#formAddCmt' ).submit()
        }
    } );
} ) */
function getCommentList() {
	$.ajax({
		method: 'GET',
		url: 'http://www.liulongbin.top:3006/api/cmtlist',
		data: '',
		dataType: '',
		success: function(res) {
			if (res.status !== 200) return alert('获取评论列表失败！');
			let arrData = [];
			$.each(res.data, function(i, item) {
				arrData.push(`
                <li class="list-group-item">
                <span class="badge" style="background-color: #F0AD4E;">${item.time}</span>
                <span class="badge" style="background-color: #5BC0DE;">${item.username}</span>
                ${item.content}
            </li>
                `);
			});
			// 清空内容,在页面添加
			$('.list-group').empty().append(arrData);
		}
	});
}
getCommentList();
// 表单验证
$(function() {
	$('#formAddCmt').submit(function(e) {
		e.preventDefault();
		let data = $(this).serialize();
		$.ajax({
			type: 'POST',
			// contentType: '',
			// dataType: '',
			url: 'http://www.liulongbin.top:3006/api/addcmt',
			data: data,
			success: function(res) {
				if (res.status !== 201) return alert('发表评论失败！');
				getCommentList();
				$('#formAddCmt')[0].reset();
			}
		});
	});
	const keyUp = $('textarea').on('keyup', function(e) {
		if (e.keyCode === 13) {
			$('#formAddCmt').submit();
		}
	});
});

