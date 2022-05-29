$(function($){
	// 设置
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
			{
				title: "1,2,3,4",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/1,2,3,4.mp3",
			},
			{
				title: "9420（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/9420（片段）.mp3",
			},
			{
				title: "Body Shots",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/Body Shots.mp3",
			},
			{
				title: "Rolling In The Deep（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/Rolling In The Deep（片段）.mp3",
			},
			{
				title: "Tik Tok",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/Tik Tok.mp3",
			},
			{
				title: "你到底有没有爱过我（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/你到底有没有爱过我（片段）.mp3",
			},
			{
				title: "别找我麻烦",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/别找我麻烦.mp3",
			},
			{
				title: "咎由自取",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/咎由自取.mp3",
			},
			{
				title: "唇唇欲动",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/唇唇欲动.mp3",
			},
			{
				title: "夜夜夜夜",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/夜夜夜夜.mp3",
			},
			{
				title: "思恋是一种病（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/思恋是一种病（片段）.mp3",
			},
			{
				title: "我想对你说baby（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/我想对你说baby（片段）.mp3",
			},
			{
				title: "房间",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/房间.mp3",
			},
			{
				title: "易燃易爆炸",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/易燃易爆炸.mp3",
			},
			{
				title: "朋友的酒（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/朋友的酒（片段）.mp3",
			},
			{
				title: "林中鸟（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/林中鸟（片段）.mp3",
			},
			{
				title: "爱我别走",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/爱我别走.mp3",
			},
			{
				title: "爱我别走2",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/爱我别走2.mp3",
			},
			{
				title: "生生世世爱",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/生生世世爱.mp3",
			},
			{
				title: "耍太极（片段）",
				artist: "2021-08-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-08-30/耍太极（片段）.mp3",
			},
			{
				title: "123木头人",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/123木头人.mp3",
			},
			{
				title: "Volar",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/Volar.mp3",
			},
			{
				title: "不舍",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/不舍.mp3",
			},
			{
				title: "流着泪说分手",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/流着泪说分手.mp3",
			},
			{
				title: "牵丝戏",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/牵丝戏.mp3",
			},
			{
				title: "赤伶",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/赤伶.mp3",
			},
			{
				title: "身骑白马",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/身骑白马.mp3",
			},
			{
				title: "遗失的美好",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/遗失的美好.mp3",
			},
			{
				title: "错位时空",
				artist: "2021-09-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-19/错位时空.mp3",
			},
			{
				title: "三寸天堂",
				artist: "2021-09-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-20/三寸天堂.mp3",
			},
			{
				title: "下雨天（片段）",
				artist: "2021-09-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-20/下雨天（片段）.mp3",
			},
			{
				title: "午夜DJ",
				artist: "2021-09-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-20/午夜DJ.mp3",
			},
			{
				title: "爱，存在",
				artist: "2021-09-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-20/爱，存在.mp3",
			},
			{
				title: "不舍",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/不舍.mp3",
			},
			{
				title: "九张机",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/九张机.mp3",
			},
			{
				title: "掉了",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/掉了.mp3",
			},
			{
				title: "明明就",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/明明就.mp3",
			},
			{
				title: "溯",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/溯.mp3",
			},
			{
				title: "白鸽",
				artist: "2021-09-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-24/白鸽.mp3",
			},
			{
				title: "勇气",
				artist: "2021-09-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-27/勇气.mp3",
			},
			{
				title: "小宇",
				artist: "2021-09-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-27/小宇.mp3",
			},
			{
				title: "梁山伯与茱丽叶",
				artist: "2021-09-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-27/梁山伯与茱丽叶.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2021-09-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-27/阿拉斯加海湾.mp3",
			},
			{
				title: "1,2,3,4",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/1,2,3,4.mp3",
			},
			{
				title: "17岁（片段）",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/17岁（片段）.mp3",
			},
			{
				title: "Dinosaur恐龙",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/Dinosaur恐龙.mp3",
			},
			{
				title: "万物生（片段）",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/万物生（片段）.mp3",
			},
			{
				title: "千千阙歌",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/千千阙歌.mp3",
			},
			{
				title: "吹梦到西洲",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/吹梦到西洲.mp3",
			},
			{
				title: "处处吻",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/处处吻.mp3",
			},
			{
				title: "大田后生仔（片段）",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/大田后生仔（片段）.mp3",
			},
			{
				title: "失眠飞行",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/失眠飞行.mp3",
			},
			{
				title: "小鸡哔哔",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/小鸡哔哔.mp3",
			},
			{
				title: "念思之王",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/念思之王.mp3",
			},
			{
				title: "我妈已经三天没打我啦",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/我妈已经三天没打我啦.mp3",
			},
			{
				title: "爱拼才会赢",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/爱拼才会赢.mp3",
			},
			{
				title: "生僻字（烫嘴版）",
				artist: "2021-09-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-09-29/生僻字（烫嘴版）.mp3",
			},
			{
				title: "天空之城（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-01/天空之城（陶笛版）.mp3",
			},
			{
				title: "奇妙的约会（道歉版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-01/奇妙的约会（道歉版）.mp3",
			},
			{
				title: "小幸运（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-01/小幸运（陶笛版）.mp3",
			},
			{
				title: "小蜜蜂（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-01/小蜜蜂（陶笛版）.mp3",
			},
			{
				title: "陶笛+小幸运（片段）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-01/陶笛+小幸运（片段）.mp3",
			},
			{
				title: "小可爱与小领带",
				artist: "2021-10-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-03/小可爱与小领带.mp3",
			},
			{
				title: "朋友的酒",
				artist: "2021-10-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-03/朋友的酒.mp3",
			},
			{
				title: "FunRun",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/FunRun.mp3",
			},
			{
				title: "Toxic（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/Toxic（片段）.mp3",
			},
			{
				title: "Volar",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/Volar.mp3",
			},
			{
				title: "告白气球（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/告白气球（片段）.mp3",
			},
			{
				title: "心墙",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/心墙.mp3",
			},
			{
				title: "犯错（道歉版）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/犯错（道歉版）.mp3",
			},
			{
				title: "苏幕遮（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-05/苏幕遮（片段）.mp3",
			},
			{
				title: "How You Like That（嗨歌）",
				artist: "2021-10-08",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-08/How You Like That（嗨歌）.mp3",
			},
			{
				title: "左边（片段）",
				artist: "2021-10-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-15/左边（片段）.mp3",
			},
			{
				title: "疑心病",
				artist: "2021-10-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-15/疑心病.mp3",
			},
			{
				title: "你把我灌醉",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/你把我灌醉.mp3",
			},
			{
				title: "咎由自取",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/咎由自取.mp3",
			},
			{
				title: "如果有来生",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/如果有来生.mp3",
			},
			{
				title: "小情歌",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/小情歌.mp3",
			},
			{
				title: "我只有我",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/我只有我.mp3",
			},
			{
				title: "骄傲的少年（片段）",
				artist: "2021-10-17",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-17/骄傲的少年（片段）.mp3",
			},
			{
				title: "宝贝",
				artist: "2021-10-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-22/宝贝.mp3",
			},
			{
				title: "山楂树之恋",
				artist: "2021-10-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-22/山楂树之恋.mp3",
			},
			{
				title: "溯",
				artist: "2021-10-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-22/溯.mp3",
			},
			{
				title: "空心",
				artist: "2021-10-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-22/空心.mp3",
			},
			{
				title: "非你莫属",
				artist: "2021-10-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-27/非你莫属.mp3",
			},
			{
				title: "Body Shots",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/Body Shots.mp3",
			},
			{
				title: "Volar",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/Volar.mp3",
			},
			{
				title: "嘉宾（醉酒版）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/嘉宾（醉酒版）.mp3",
			},
			{
				title: "囍",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/囍.mp3",
			},
			{
				title: "如愿",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/如愿.mp3",
			},
			{
				title: "感恩的心（片段）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/感恩的心（片段）.mp3",
			},
			{
				title: "我妈已经三天没有打我啦",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/我妈已经三天没有打我啦.mp3",
			},
			{
				title: "掉了",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/掉了.mp3",
			},
			{
				title: "易燃易爆炸",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/易燃易爆炸.mp3",
			},
			{
				title: "朋友的酒（醉酒版）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/朋友的酒（醉酒版）.mp3",
			},
			{
				title: "牛奶颂（片段）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/牛奶颂（片段）.mp3",
			},
			{
				title: "画沙",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/画沙.mp3",
			},
			{
				title: "让我们荡起双桨（片段）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/让我们荡起双桨（片段）.mp3",
			},
			{
				title: "雪人（甩葱版）",
				artist: "2021-10-30闺蜜结婚",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-30闺蜜结婚/雪人（甩葱版）.mp3",
			},
			{
				title: "不舍",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/不舍.mp3",
			},
			{
				title: "云与海",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/云与海.mp3",
			},
			{
				title: "微微",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/微微.mp3",
			},
			{
				title: "恋爱画板",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/恋爱画板.mp3",
			},
			{
				title: "房间",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/房间.mp3",
			},
			{
				title: "无人之岛",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/无人之岛.mp3",
			},
			{
				title: "童话镇",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/童话镇.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2021-10-31千钻黑丝",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-10-31千钻黑丝/阿拉斯加海湾.mp3",
			},
			{
				title: "Body Shots",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/Body Shots.mp3",
			},
			{
				title: "Call Me Maybe中文版",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/Call Me Maybe中文版.mp3",
			},
			{
				title: "MC来了（保丽龙）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/MC来了（保丽龙）.mp3",
			},
			{
				title: "善变",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/善变.mp3",
			},
			{
				title: "嘉宾",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/嘉宾.mp3",
			},
			{
				title: "想你的夜（片段）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/想你的夜（片段）.mp3",
			},
			{
				title: "沙漠骆驼（片段）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/沙漠骆驼（片段）.mp3",
			},
			{
				title: "男孩",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/男孩.mp3",
			},
			{
				title: "舞女泪（主播泪）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/舞女泪（主播泪）.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2021-11-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-03/阿拉斯加海湾.mp3",
			},
			{
				title: "暧昧+滑笛",
				artist: "2021-11-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-05/暧昧+滑笛.mp3",
			},
			{
				title: "祝你生日快乐（滑笛版）",
				artist: "2021-11-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-05/祝你生日快乐（滑笛版）.mp3",
			},
			{
				title: "花海",
				artist: "2021-11-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-05/花海.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2021-11-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2021-11-05/阿拉斯加海湾.mp3",
			},
			{
				title: "不舍",
				artist: "2022-01-18复播",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-18复播/不舍.mp3",
			},
			{
				title: "勿忘心安",
				artist: "2022-01-18复播",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-18复播/勿忘心安.mp3",
			},
			{
				title: "叹",
				artist: "2022-01-18复播",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-18复播/叹.mp3",
			},
			{
				title: "房间",
				artist: "2022-01-18复播",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-18复播/房间.mp3",
			},
			{
				title: "Body shots",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/Body shots.mp3",
			},
			{
				title: "你到底有没有爱过我DJ版",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/你到底有没有爱过我DJ版.mp3",
			},
			{
				title: "哪里都是你",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/哪里都是你.mp3",
			},
			{
				title: "外婆说",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/外婆说.mp3",
			},
			{
				title: "掉了",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/掉了.mp3",
			},
			{
				title: "易燃易爆炸",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/易燃易爆炸.mp3",
			},
			{
				title: "白鸽",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/白鸽.mp3",
			},
			{
				title: "苏幕遮",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/苏幕遮.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/阿拉斯加海湾.mp3",
			},
			{
				title: "鸦雀无声",
				artist: "2022-01-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-20/鸦雀无声.mp3",
			},
			{
				title: "Buttons（烫嘴）",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/Buttons（烫嘴）.mp3",
			},
			{
				title: "Tik Tok",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/Tik Tok.mp3",
			},
			{
				title: "Volar",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/Volar.mp3",
			},
			{
				title: "你把我灌醉",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/你把我灌醉.mp3",
			},
			{
				title: "光的方向",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/光的方向.mp3",
			},
			{
				title: "全是爱",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/全是爱.mp3",
			},
			{
				title: "外婆说",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/外婆说.mp3",
			},
			{
				title: "掉了",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/掉了.mp3",
			},
			{
				title: "断水流",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/断水流.mp3",
			},
			{
				title: "无人之岛",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/无人之岛.mp3",
			},
			{
				title: "荷塘月色",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/荷塘月色.mp3",
			},
			{
				title: "越来越好",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/越来越好.mp3",
			},
			{
				title: "酒醉的蝴蝶DJ版",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/酒醉的蝴蝶DJ版.mp3",
			},
			{
				title: "飘向北方",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/飘向北方.mp3",
			},
			{
				title: "鸦雀无声",
				artist: "2022-01-24",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-24/鸦雀无声.mp3",
			},
			{
				title: "光的方向",
				artist: "2022-01-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-28/光的方向.mp3",
			},
			{
				title: "关键词",
				artist: "2022-01-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-28/关键词.mp3",
			},
			{
				title: "夏天的风",
				artist: "2022-01-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-28/夏天的风.mp3",
			},
			{
				title: "我只有我",
				artist: "2022-01-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-28/我只有我.mp3",
			},
			{
				title: "说散就散",
				artist: "2022-01-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-01-28/说散就散.mp3",
			},
			{
				title: "小领带与小可爱",
				artist: "2022-02-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-02/小领带与小可爱.mp3",
			},
			{
				title: "海芋恋",
				artist: "2022-02-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-02/海芋恋.mp3",
			},
			{
				title: "画沙（片段）",
				artist: "2022-02-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-02/画沙（片段）.mp3",
			},
			{
				title: "鸦雀无声",
				artist: "2022-02-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-02/鸦雀无声.mp3",
			},
			{
				title: "1,2,3,4",
				artist: "2022-02-04",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-04/1,2,3,4.mp3",
			},
			{
				title: "Tik Tok",
				artist: "2022-02-04",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-04/Tik Tok.mp3",
			},
			{
				title: "下雨天",
				artist: "2022-02-04",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-04/下雨天.mp3",
			},
			{
				title: "水星记",
				artist: "2022-02-04",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-04/水星记.mp3",
			},
			{
				title: "11（片段）",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/11（片段）.mp3",
			},
			{
				title: "Let It Go",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/Let It Go.mp3",
			},
			{
				title: "Love Story英中混合",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/Love Story英中混合.mp3",
			},
			{
				title: "光年之外",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/光年之外.mp3",
			},
			{
				title: "叹",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/叹.mp3",
			},
			{
				title: "哪里都是你（片段）",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/哪里都是你（片段）.mp3",
			},
			{
				title: "嘉宾",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/嘉宾.mp3",
			},
			{
				title: "嚣张领奖词",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/嚣张领奖词.mp3",
			},
			{
				title: "思念是一种病",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/思念是一种病.mp3",
			},
			{
				title: "潮汐",
				artist: "2022-02-10主播之夜",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-10主播之夜/潮汐.mp3",
			},
			{
				title: "11+道歉",
				artist: "2022-02-11",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-11/11+道歉.mp3",
			},
			{
				title: "你孤寡",
				artist: "2022-02-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-14/你孤寡.mp3",
			},
			{
				title: "分手快乐（改编）",
				artist: "2022-02-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-14/分手快乐（改编）.mp3",
			},
			{
				title: "Puma（Rap团）",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/Puma（Rap团）.mp3",
			},
			{
				title: "后继者",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/后继者.mp3",
			},
			{
				title: "喷火龙《兰亭序》",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/喷火龙《兰亭序》.mp3",
			},
			{
				title: "小可爱与小领带（片段）",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/小可爱与小领带（片段）.mp3",
			},
			{
				title: "方舟《说书人》",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/方舟《说书人》.mp3",
			},
			{
				title: "错位时空（片段）",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/错位时空（片段）.mp3",
			},
			{
				title: "青鸟日文（片段）",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/青鸟日文（片段）.mp3",
			},
			{
				title: "风间澈《孤勇者》",
				artist: "2022-02-15审视大会",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-15审视大会/风间澈《孤勇者》.mp3",
			},
			{
				title: "有没有那么一首歌",
				artist: "2022-02-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-20/有没有那么一首歌.mp3",
			},
			{
				title: "A.I.N.Y爱你（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/A.I.N.Y爱你（片段）.mp3",
			},
			{
				title: "Bad Guy英中混合（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/Bad Guy英中混合（片段）.mp3",
			},
			{
				title: "Someone Like You英中混合（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/Someone Like You英中混合（片段）.mp3",
			},
			{
				title: "一生所爱（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/一生所爱（片段）.mp3",
			},
			{
				title: "会呼吸的痛",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/会呼吸的痛.mp3",
			},
			{
				title: "只是太爱你",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/只是太爱你.mp3",
			},
			{
				title: "夏天的风",
				artist: "2022-02-23",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-23/夏天的风.mp3",
			},
			{
				title: "素颜",
				artist: "2022-02-25",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-25/素颜.mp3",
			},
			{
				title: "潮汐",
				artist: "2022-02-28",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-02-28/潮汐.mp3",
			},
			{
				title: "Dinosaur恐龙",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/Dinosaur恐龙.mp3",
			},
			{
				title: "一吻之间",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/一吻之间.mp3",
			},
			{
				title: "不加班宣言",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/不加班宣言.mp3",
			},
			{
				title: "不是因为寂寞才想你（DJ版）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/不是因为寂寞才想你（DJ版）.mp3",
			},
			{
				title: "你到底有没有爱过我（DJ版）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/你到底有没有爱过我（DJ版）.mp3",
			},
			{
				title: "你（片段）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/你（片段）.mp3",
			},
			{
				title: "叹",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/叹.mp3",
			},
			{
				title: "无人之岛",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/无人之岛.mp3",
			},
			{
				title: "潮汐",
				artist: "2022-03-01",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-01/潮汐.mp3",
			},
			{
				title: "像鱼",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/像鱼.mp3",
			},
			{
				title: "坏女孩",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/坏女孩.mp3",
			},
			{
				title: "明明就（追求完美版）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/明明就（追求完美版）.mp3",
			},
			{
				title: "星辰大海",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/星辰大海.mp3",
			},
			{
				title: "熬夜上瘾",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/熬夜上瘾.mp3",
			},
			{
				title: "白月光与朱砂痣（片段）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/白月光与朱砂痣（片段）.mp3",
			},
			{
				title: "过客（片段）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-02/过客（片段）.mp3",
			},
			{
				title: "11（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/11（片段）.mp3",
			},
			{
				title: "不是因为寂寞才想你DJ（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/不是因为寂寞才想你DJ（片段）.mp3",
			},
			{
				title: "潮汐",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/潮汐.mp3",
			},
			{
				title: "空山新雨后",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/空山新雨后.mp3",
			},
			{
				title: "花海",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/花海.mp3",
			},
			{
				title: "那里都是你（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/那里都是你（片段）.mp3",
			},
			{
				title: "门没锁",
				artist: "2022-03-12",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-12/门没锁.mp3",
			},
			{
				title: "11（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/11（片段）.mp3",
			},
			{
				title: "Lemon（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/Lemon（片段）.mp3",
			},
			{
				title: "不是因为寂寞才想你（DJ片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/不是因为寂寞才想你（DJ片段）.mp3",
			},
			{
				title: "你到底有没有爱过我（DJ片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/你到底有没有爱过我（DJ片段）.mp3",
			},
			{
				title: "全是爱",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/全是爱.mp3",
			},
			{
				title: "哪里都是你（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/哪里都是你（片段）.mp3",
			},
			{
				title: "心墙",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/心墙.mp3",
			},
			{
				title: "恋爱画板",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/恋爱画板.mp3",
			},
			{
				title: "手放开（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/手放开（片段）.mp3",
			},
			{
				title: "无人之岛",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/无人之岛.mp3",
			},
			{
				title: "猜不透（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/猜不透（片段）.mp3",
			},
			{
				title: "破茧（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/破茧（片段）.mp3",
			},
			{
				title: "红莲华（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/红莲华（片段）.mp3",
			},
			{
				title: "荷塘月色（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/荷塘月色（片段）.mp3",
			},
			{
				title: "让泪化作相思雨（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/让泪化作相思雨（片段）.mp3",
			},
			{
				title: "阿拉斯加海湾",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/阿拉斯加海湾.mp3",
			},
			{
				title: "鸦雀无声",
				artist: "2022-03-14",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-14/鸦雀无声.mp3",
			},
			{
				title: "1,2,3,4",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/1,2,3,4.mp3",
			},
			{
				title: "FUNRUN",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/FUNRUN.mp3",
			},
			{
				title: "外婆说",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/外婆说.mp3",
			},
			{
				title: "我的未来式（片段）",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/我的未来式（片段）.mp3",
			},
			{
				title: "断水流",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/断水流.mp3",
			},
			{
				title: "易燃易爆炸",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/易燃易爆炸.mp3",
			},
			{
				title: "爱丫爱丫",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/爱丫爱丫.mp3",
			},
			{
				title: "白鸽",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/白鸽.mp3",
			},
			{
				title: "越来越好",
				artist: "2022-03-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-18/越来越好.mp3",
			},
			{
				title: "我们的纪念",
				artist: "2022-03-19",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-19/我们的纪念.mp3",
			},
			{
				title: "New Boy（片段）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-20/New Boy（片段）.mp3",
			},
			{
				title: "你到底有没有爱过我（DJ版）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-20/你到底有没有爱过我（DJ版）.mp3",
			},
			{
				title: "朋友的酒（干杯版）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-20/朋友的酒（干杯版）.mp3",
			},
			{
				title: "Volar",
				artist: "2022-03-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-22/Volar.mp3",
			},
			{
				title: "扇子舞（片段）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-22/扇子舞（片段）.mp3",
			},
			{
				title: "灵魂出窍（团团版）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-22/灵魂出窍（团团版）.mp3",
			},
			{
				title: "灵魂出窍（苹果味版）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-22/灵魂出窍（苹果味版）.mp3",
			},
			{
				title: "阿七七（片段）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-22/阿七七（片段）.mp3",
			},
			{
				title: "Tik Tok",
				artist: "2022-03-25",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-25/Tik Tok.mp3",
			},
			{
				title: "红玫瑰（片段）",
				artist: "2022-03-25",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-25/红玫瑰（片段）.mp3",
			},
			{
				title: "那里都是你",
				artist: "2022-03-25",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-25/那里都是你.mp3",
			},
			{
				title: "门没锁（电音版）",
				artist: "2022-03-25",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-25/门没锁（电音版）.mp3",
			},
			{
				title: "1,2,3,4（迟到改编版）",
				artist: "2022-03-27",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-27/1,2,3,4（迟到改编版）.mp3",
			},
			{
				title: "怎么了",
				artist: "2022-03-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-30/怎么了.mp3",
			},
			{
				title: "耿",
				artist: "2022-03-30",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-03-30/耿.mp3",
			},
			{
				title: "一个我饮酒醉（片段）",
				artist: "2022-04-03",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-03/一个我饮酒醉（片段）.mp3",
			},
			{
				title: "不得不爱",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/不得不爱.mp3",
			},
			{
				title: "光",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/光.mp3",
			},
			{
				title: "外婆说",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/外婆说.mp3",
			},
			{
				title: "快乐崇拜（片段）",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/快乐崇拜（片段）.mp3",
			},
			{
				title: "想自由",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/想自由.mp3",
			},
			{
				title: "第一天（片段）",
				artist: "2022-04-05",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-05/第一天（片段）.mp3",
			},
			{
				title: "外婆说",
				artist: "2022-04-07",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-07/外婆说.mp3",
			},
			{
				title: "如果爱忘了",
				artist: "2022-04-07",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-07/如果爱忘了.mp3",
			},
			{
				title: "潮汐",
				artist: "2022-04-07",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-07/潮汐.mp3",
			},
			{
				title: "第三者的第三者（片段）",
				artist: "2022-04-07",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-07/第三者的第三者（片段）.mp3",
			},
			{
				title: "非你不要（片段）",
				artist: "2022-04-07",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-07/非你不要（片段）.mp3",
			},
			{
				title: "1,2,3,4",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/1,2,3,4.mp3",
			},
			{
				title: "Manta",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/Manta.mp3",
			},
			{
				title: "你把我灌醉",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/你把我灌醉.mp3",
			},
			{
				title: "只是太爱你（片段）",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/只是太爱你（片段）.mp3",
			},
			{
				title: "我的心好冷",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/我的心好冷.mp3",
			},
			{
				title: "潇洒小姐（片段）",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/潇洒小姐（片段）.mp3",
			},
			{
				title: "白月光与朱砂痣",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/白月光与朱砂痣.mp3",
			},
			{
				title: "飘向北方",
				artist: "2022-04-10",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-10/飘向北方.mp3",
			},
			{
				title: "不舍",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/不舍.mp3",
			},
			{
				title: "山楂树之恋",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/山楂树之恋.mp3",
			},
			{
				title: "无人之岛",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/无人之岛.mp3",
			},
			{
				title: "死了都要爱",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/死了都要爱.mp3",
			},
			{
				title: "溯",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/溯.mp3",
			},
			{
				title: "煎熬",
				artist: "2022-04-15",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-15/煎熬.mp3",
			},
			{
				title: "恭喜发财（片段）",
				artist: "2022-04-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-18/恭喜发财（片段）.mp3",
			},
			{
				title: "没有你的日子我真的好孤单",
				artist: "2022-04-18",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-18/没有你的日子我真的好孤单.mp3",
			},
			{
				title: "体面",
				artist: "2022-04-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-20/体面.mp3",
			},
			{
				title: "你走（片段）",
				artist: "2022-04-20",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-20/你走（片段）.mp3",
			},
			{
				title: "没有你的日子我真的好孤单",
				artist: "2022-04-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-29/没有你的日子我真的好孤单.mp3",
			},
			{
				title: "空山新雨后",
				artist: "2022-04-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-29/空山新雨后.mp3",
			},
			{
				title: "鸦雀无声",
				artist: "2022-04-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-29/鸦雀无声.mp3",
			},
			{
				title: "小鸡哔哔",
				artist: "2022-04-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-29/小鸡哔哔.mp3",
			},
			{
				title: "老公天下第一",
				artist: "2022-04-29",
				album: " ",
				cover: "img/tx1.jpg",
				mp3: "https://mr-lin0723-1309069954.cos.ap-shanghai.myqcloud.com/团团音乐/2022-04-29/老公天下第一.mp3",
			},

	];

	// 加载播放列表
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// 更新进度
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// 进度滑块
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// 音量滑块
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');
     //静音按钮
//	$('.mute').click(function () {
//		if ($(this).hasClass('enable')) {
//			setVolume($(this).data('volume'));
//			$(this).removeClass('enable');
//		} else {
//			$(this).data('volume', audio.volume).addClass('enable');
//			setVolume(0);
//		}
//	});

	// 切换曲目
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// 随机播放
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// 曲目结束时触发
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// 轨道完全加载时触发
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// 加载轨道
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');
		//自定义封面-可删
		item.cover = 'img/tx1.png' 
		//动态网页标题-可删
		$('title').html('💕 '+item.title)
		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}
     // 循环播放按钮
	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
			$(this).css("background-image","url(css/images/repeat2.png)");
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
			$(this).css("background-image","url(css/images/repeat.png)");
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
			$(this).css("background-image","url(css/images/repeat2.png)");
		}
	});
    //随机播放按钮
	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).css("background-image","url(css/images/shuffle.png)");
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).css("background-image","url(css/images/shuffle2.png)");
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});
