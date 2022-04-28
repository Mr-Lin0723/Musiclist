$(function($){
	// 设置
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
			{
				title: "体面",
				artist: "2022-04-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302h8cce50f172b38f040754bee4f0c22c23?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmg4Y2NlNTBmMTcyYjM4ZjA0MDc1NGJlZTRmMGMyMmMyMyJ9.0LNSK-39HywmWtMVtO3ZvPi-vCf2TWL-3PxySMX6318&download=%E4%BD%93%E9%9D%A2.mp3",
			},
					{
				title: "你走（片段）",
				artist: "2022-04-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302hde3a0c82b4e386387019f18ad789335e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmhkZTNhMGM4MmI0ZTM4NjM4NzAxOWYxOGFkNzg5MzM1ZSJ9.B8qjKFzq_svl-yqa0UgvmwEG7EoLbPF3qpIgXKP96fM&download=%E4%BD%A0%E8%B5%B0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "没有你的日子我真的好孤单",
				artist: "2022-04-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302h409d1fedc0a802dc81e0c5bad79a4beb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmg0MDlkMWZlZGMwYTgwMmRjODFlMGM1YmFkNzlhNGJlYiJ9.Jf9XTM-xf1lP-yUtNsmTQUQSWOC0Y34C__xb6oj23C0&download=%E6%B2%A1%E6%9C%89%E4%BD%A0%E7%9A%84%E6%97%A5%E5%AD%90%E6%88%91%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%AD%A4%E5%8D%95.mp3",
			},
					{
				title: "恭喜发财（片段）",
				artist: "2022-04-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ha0cb9ceebd058a621a66650088be28a6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmhhMGNiOWNlZWJkMDU4YTYyMWE2NjY1MDA4OGJlMjhhNiJ9.G115lFd4FT2dLEORTqdl55c2CKEyIFZzZrdO8BZQQ1s&download=%E6%81%AD%E5%96%9C%E5%8F%91%E8%B4%A2%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "不舍",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gfffc47b14da07cb2ea7a3c927b141c91?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdmZmZjNDdiMTRkYTA3Y2IyZWE3YTNjOTI3YjE0MWM5MSJ9.zvEv7h_awIZOKNRdhnxTimxic38S6dC_c95gWYlDhrU&download=%E4%B8%8D%E8%88%8D.mp3",
			},
					{
				title: "无人之岛",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g3ce6b7a201e2577181172dc6e63ce7ee?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmczY2U2YjdhMjAxZTI1NzcxODExNzJkYzZlNjNjZTdlZSJ9.LLPmadcRWRDL9S5_bkDewvV-4vCUnoYyBznkJYVaKFg&download=%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",
			},
					{
				title: "山楂树之恋",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gef1abd1dfb4060f166c7f0711d1008d9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlZjFhYmQxZGZiNDA2MGYxNjZjN2YwNzExZDEwMDhkOSJ9.OyuD-aWzW1Nld9OiZK4ixQs9tDtXx4-P48POADdE6dA&download=%E5%B1%B1%E6%A5%82%E6%A0%91%E4%B9%8B%E6%81%8B.mp3",
			},
					{
				title: "溯",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g157f38d83b44888c0ff512920fef6fa7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmcxNTdmMzhkODNiNDQ4ODhjMGZmNTEyOTIwZmVmNmZhNyJ9.pvquAyfwacwhDzl_xUpLA3cWVQqOJ2-XoJ5kAztSTT8&download=%E6%BA%AF.mp3",
			},
					{
				title: "煎熬",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g1b70e7980023ae6c3f68327243dcf1e5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmcxYjcwZTc5ODAwMjNhZTZjM2Y2ODMyNzI0M2RjZjFlNSJ9.0A1-UkO9NwC8_pJtNoYLgZbJWlkhd6S17OSWdhBj2og&download=%E7%85%8E%E7%86%AC.mp3",
			},
					{
				title: "死了都要爱",
				artist: "2022-04-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ge0d554639aee0b86d5e0719ae96f1f1b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlMGQ1NTQ2MzlhZWUwYjg2ZDVlMDcxOWFlOTZmMWYxYiJ9.FmSACaSL2EES8X3UHVELQP8ctgaSwMFGnrBJYSkhk6Q&download=%E6%AD%BB%E4%BA%86%E9%83%BD%E8%A6%81%E7%88%B1.mp3",
			},
					{
				title: "1,2,3,4",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g567ecca4dc718bfe9d1320eb5c0338b3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc1NjdlY2NhNGRjNzE4YmZlOWQxMzIwZWI1YzAzMzhiMyJ9.r3iyBR-pjvjAXM0kFuboy7mMjehew0Y_Rwwy4kl2TrY&download=1%2C2%2C3%2C4.mp3",
			},
					{
				title: "你把我灌醉",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ga9a5ab6cd62ad5b1ebb5c39667fc1d50?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdhOWE1YWI2Y2Q2MmFkNWIxZWJiNWMzOTY2N2ZjMWQ1MCJ9.pj8Nez_jcINeQSz65RHiam4Ld_ywLQMOSEUW3X58_Zw&download=%E4%BD%A0%E6%8A%8A%E6%88%91%E7%81%8C%E9%86%89.mp3",
			},
					{
				title: "潇洒小姐（片段）",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gd2ff4094d5bf0b75310fa7006ab0f982?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdkMmZmNDA5NGQ1YmYwYjc1MzEwZmE3MDA2YWIwZjk4MiJ9.dLHRw4m-UrR_Zk2hUYOmYgqWO4fbj9ISJqCMajjBs1A&download=%E6%BD%87%E6%B4%92%E5%B0%8F%E5%A7%90%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "飘向北方",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gd68404391cb4640c2a0607ab86daf0bf?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdkNjg0MDQzOTFjYjQ2NDBjMmEwNjA3YWI4NmRhZjBiZiJ9.tFmgI6htefEG1NrvFCmX5SvJnUxLcCkYZToIXXtOOQs&download=%E9%A3%98%E5%90%91%E5%8C%97%E6%96%B9.mp3",
			},
					{
				title: "白月光与朱砂痣",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g472736ee0e394e803722a7ef8f6080d2?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc0NzI3MzZlZTBlMzk0ZTgwMzcyMmE3ZWY4ZjYwODBkMiJ9.P1Im-kOnjTCyMU5zk7E2ZQbi2XYpRYiDFUcaloVmYWA&download=%E7%99%BD%E6%9C%88%E5%85%89%E4%B8%8E%E6%9C%B1%E7%A0%82%E7%97%A3.mp3",
			},
					{
				title: "我的心好冷",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g326b08ae05c422d5cafb2eddd04be238?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmczMjZiMDhhZTA1YzQyMmQ1Y2FmYjJlZGRkMDRiZTIzOCJ9.QlImFbPBTHbagD06hORzNRRt8KaYoWNJLsgXhe8ljps&download=%E6%88%91%E7%9A%84%E5%BF%83%E5%A5%BD%E5%86%B7.mp3",
			},
					{
				title: "只是太爱你（片段）",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g5a9893809a213cb9398f6b62fca95b4e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc1YTk4OTM4MDlhMjEzY2I5Mzk4ZjZiNjJmY2E5NWI0ZSJ9.soqPJIICEvwpmSu8ebRlmwdATiDgG-iTPlokAMIGc3c&download=%E5%8F%AA%E6%98%AF%E5%A4%AA%E7%88%B1%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Manta",
				artist: "2022-04-10",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gcd93cda285807dad9ab18ff8f5b504b0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdjZDkzY2RhMjg1ODA3ZGFkOWFiMThmZjhmNWI1MDRiMCJ9.u-F5pEZt4J5U0aJibPtnHtyTi1lfuwRS14EjPc1dr3k&download=Manta.mp3",
			},
					{
				title: "如果爱忘了",
				artist: "2022-04-07",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ge98c9e49f3924a3b02d8025d380db1f8?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlOThjOWU0OWYzOTI0YTNiMDJkODAyNWQzODBkYjFmOCJ9.Flgr8OAmEqe06_6IoECj7coyHUoyCAqqHnC6xVGVh5w&download=%E5%A6%82%E6%9E%9C%E7%88%B1%E5%BF%98%E4%BA%86.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-04-07",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g8445fa04af45fb70d390e5e3e7e71b3a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4NDQ1ZmEwNGFmNDVmYjcwZDM5MGU1ZTNlN2U3MWIzYSJ9.okpk3sdH6yh9ku0jUTmk9tINVGYD06hDgIFyc0v-pls&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "非你不要（片段）",
				artist: "2022-04-07",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g0e0280d84604619669fe99afb9f5183f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmcwZTAyODBkODQ2MDQ2MTk2NjlmZTk5YWZiOWY1MTgzZiJ9.Hm1StJeApQ_O_rsdhEEwYOFBf7aznXEWAMDuJNeso1A&download=%E9%9D%9E%E4%BD%A0%E4%B8%8D%E8%A6%81%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "第三者的第三者（片段）",
				artist: "2022-04-07",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gd26b3dd8b27b694d2a1999e70973bfb9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdkMjZiM2RkOGIyN2I2OTRkMmExOTk5ZTcwOTczYmZiOSJ9.QowqszVE4hvEjJJriK1LFtpfAtcAi3U4fn11_1077dg&download=%E7%AC%AC%E4%B8%89%E8%80%85%E7%9A%84%E7%AC%AC%E4%B8%89%E8%80%85%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-04-07",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g7833416ed772b5778c50fd186ff7203a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc3ODMzNDE2ZWQ3NzJiNTc3OGM1MGZkMTg2ZmY3MjAzYSJ9.PmoUW2pHAvi5zDkIvQSGT9VSmlrg_bP0mspgPDzjPgc&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g8083c8400e187c075e47ce99ebbebc3b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4MDgzYzg0MDBlMTg3YzA3NWU0N2NlOTllYmJlYmMzYiJ9.lqLUfiDZSOPZ0H7UgOg7kSMrQOm78-dhUqkZsuNzbac&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "不得不爱",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gd1d6921d219b6ec8d9e573970f63b23a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdkMWQ2OTIxZDIxOWI2ZWM4ZDllNTczOTcwZjYzYjIzYSJ9.6vV5YzX_Rt476-ysJARLsYATui0rnnW7UmB22OtqROI&download=%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%88%B1.mp3",
			},
					{
				title: "快乐崇拜（片段）",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ga6b12a5924ae1ee9b538522f78e2f83e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdhNmIxMmE1OTI0YWUxZWU5YjUzODUyMmY3OGUyZjgzZSJ9.IRZlONBdxEvOUL3sbRqUVq1Ukr0aIXorTdGKxb4-hkU&download=%E5%BF%AB%E4%B9%90%E5%B4%87%E6%8B%9C%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "第一天（片段）",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g8468ba3196622b18eb9bf2ba2b6f27f9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4NDY4YmEzMTk2NjIyYjE4ZWI5YmYyYmEyYjZmMjdmOSJ9.pQ-ufxizfZAaXAF68dEtHuQEbl33eAg7FDO1sJ-p5Tc&download=%E7%AC%AC%E4%B8%80%E5%A4%A9%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "光",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gf3012407624ea3a054920c50c65eccec?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdmMzAxMjQwNzYyNGVhM2EwNTQ5MjBjNTBjNjVlY2NlYyJ9.22W4kLDiEOa-i8UgfexP5KOdcOe4iLkC8Iai-jdYJho&download=%E5%85%89.mp3",
			},
					{
				title: "想自由",
				artist: "2022-04-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g5f6a302373e315903e8a00a487e6be94?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc1ZjZhMzAyMzczZTMxNTkwM2U4YTAwYTQ4N2U2YmU5NCJ9.xgr0JtvupjkcPaVLTS_GzlxPWvcsO-8CZYCPy8aYUT4&download=%E6%83%B3%E8%87%AA%E7%94%B1.mp3",
			},
					{
				title: "一个我饮酒醉（片段）",
				artist: "2022-04-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gecaadd2c5136d05720d6df2379a78fa0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTc2MywiaWF0IjoxNjUwNzk2OTYzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlY2FhZGQyYzUxMzZkMDU3MjBkNmRmMjM3OWE3OGZhMCJ9.KWpmx8s4KGxizvNy2rtplJehfBTjPZwPBozJEofQ17A&download=%E4%B8%80%E4%B8%AA%E6%88%91%E9%A5%AE%E9%85%92%E9%86%89%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "怎么了",
				artist: "2022-03-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gc509a39dceb7178787447a4e56b61a05?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdjNTA5YTM5ZGNlYjcxNzg3ODc0NDdhNGU1NmI2MWEwNSJ9.d8mq2Hixq19MG6NrxBCJPAmWWif201j5pn1Ex42euJc&download=%E6%80%8E%E4%B9%88%E4%BA%86.mp3",
			},
					{
				title: "耿",
				artist: "2022-03-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g35b8642141966be73aaeec185d8e8d1f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmczNWI4NjQyMTQxOTY2YmU3M2FhZWVjMTg1ZDhlOGQxZiJ9.x8Vui_nd4yesVBnTLSQAjyzH_Akjsn3sCtTjhaR3nVY&download=%E8%80%BF.mp3",
			},
					{
				title: "1,2,3,4（迟到改编版）",
				artist: "2022-03-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g806735c805ca20236686c55301299593?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4MDY3MzVjODA1Y2EyMDIzNjY4NmM1NTMwMTI5OTU5MyJ9.jyq6LXNZ0hESAkPfD4VsWdbBBHS1NMhQ12XJXyU4P5o&download=1%2C2%2C3%2C4%EF%BC%88%E8%BF%9F%E5%88%B0%E6%94%B9%E7%BC%96%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "红玫瑰（片段）",
				artist: "2022-03-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ge74d1fb9cd1a2fc483d450fd7d5bd729?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlNzRkMWZiOWNkMWEyZmM0ODNkNDUwZmQ3ZDViZDcyOSJ9.RdYKvnWKa-cZJp8tjtHG3t9wl-D9HqzAF_qck6FrxVw&download=%E7%BA%A2%E7%8E%AB%E7%91%B0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "那里都是你",
				artist: "2022-03-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g81bed573d7c5b9caabb6ac378930be26?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4MWJlZDU3M2Q3YzViOWNhYWJiNmFjMzc4OTMwYmUyNiJ9._fzbRv1t0G44QjrBhdlzDjxA-g4Mdauqi2J-pgGpTn8&download=%E9%82%A3%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0.mp3",
			},
					{
				title: "门没锁（电音版）",
				artist: "2022-03-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g836357fd940b62d7b68e2949eaf1df61?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4MzYzNTdmZDk0MGI2MmQ3YjY4ZTI5NDllYWYxZGY2MSJ9.EVMpgqJKFGPfBMg9jvv1izIfcOSK_OJp_wlmmkDRWsY&download=%E9%97%A8%E6%B2%A1%E9%94%81%EF%BC%88%E7%94%B5%E9%9F%B3%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "Tik Tok",
				artist: "2022-03-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gef99b45b05c210b72bab9e19848db15d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdlZjk5YjQ1YjA1YzIxMGI3MmJhYjllMTk4NDhkYjE1ZCJ9.cwYb2lOrSo5-tsWVhRdjCjM6UW4d-nTOdkskgFMC2H8&download=Tik%20Tok.mp3",
			},
					{
				title: "灵魂出窍（苹果味版）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g9289c7929ab4c967fa6e07f1a0fdc3a5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc5Mjg5Yzc5MjlhYjRjOTY3ZmE2ZTA3ZjFhMGZkYzNhNSJ9.Cl7MdpAk3x-AwaYhsBqDtkgEEVNYdWEFdGrS68rpFBc&download=%E7%81%B5%E9%AD%82%E5%87%BA%E7%AA%8D%EF%BC%88%E8%8B%B9%E6%9E%9C%E5%91%B3%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "灵魂出窍（团团版）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g281fde5796e0858baa842371fe41e811?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmcyODFmZGU1Nzk2ZTA4NThiYWE4NDIzNzFmZTQxZTgxMSJ9.3h_jifi_2pjGoIiso6yEhFCzMrVSNa98XXWN6msWrw8&download=%E7%81%B5%E9%AD%82%E5%87%BA%E7%AA%8D%EF%BC%88%E5%9B%A2%E5%9B%A2%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "Volar",
				artist: "2022-03-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g75e5b31586be2086e1163b8643260d43?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc3NWU1YjMxNTg2YmUyMDg2ZTExNjNiODY0MzI2MGQ0MyJ9.ywLMIMon44GuOrsxyBi9K5s9UNmb0cHgLMqnKxshc4Y&download=Volar.mp3",
			},
					{
				title: "阿七七（片段）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g65eac0068d4c3a3f0c8211eb6412928c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc2NWVhYzAwNjhkNGMzYTNmMGM4MjExZWI2NDEyOTI4YyJ9.9kus6q7ntiXmJuI_XDhxbPhi2oei9eltwFE_tauw0xI&download=%E9%98%BF%E4%B8%83%E4%B8%83%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "扇子舞（片段）",
				artist: "2022-03-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gbb403278a0faadfd890666e658e47c75?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdiYjQwMzI3OGEwZmFhZGZkODkwNjY2ZTY1OGU0N2M3NSJ9.VSVAIka4Uuvdme_cwuSUwDyw1qmsgNIR1Tamoa2C9dY&download=%E6%89%87%E5%AD%90%E8%88%9E%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "New Boy（片段）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g7b49008b5ad28ad55828d2737ef2e29e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc3YjQ5MDA4YjVhZDI4YWQ1NTgyOGQyNzM3ZWYyZTI5ZSJ9.PWHAtThuPRyq-hQtHcVPfpKDFcEhtnNMkkzydxFgQlQ&download=New%20Boy%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "你到底有没有爱过我（DJ版）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gfa71c7ab54013ce83c42d5e8fc5cface?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdmYTcxYzdhYjU0MDEzY2U4M2M0MmQ1ZThmYzVjZmFjZSJ9.RIO_Bp8dksVROtdS3Yt2kSH3Mf3sQUCGivtxD47t1a8&download=%E4%BD%A0%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E8%BF%87%E6%88%91%EF%BC%88DJ%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "朋友的酒（干杯版）",
				artist: "2022-03-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g830d7ed379a3475cbacbd6369abf6fca?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc4MzBkN2VkMzc5YTM0NzVjYmFjYmQ2MzY5YWJmNmZjYSJ9.nszS8y-BMF8A8Llvg4X3MpN464M9yyWheD7azQYeSsM&download=%E6%9C%8B%E5%8F%8B%E7%9A%84%E9%85%92%EF%BC%88%E5%B9%B2%E6%9D%AF%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f31cbe4043fa1e6f39d5a29d1c3bb637a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzMWNiZTQwNDNmYTFlNmYzOWQ1YTI5ZDFjM2JiNjM3YSJ9.rRM5IQeVpi6PlUsZKoBS6HvH_trocBtmIe_Iy_NMZoQ&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "断水流",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f42550fdd70fbfb1d6f4aa77c18b48973?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0MjU1MGZkZDcwZmJmYjFkNmY0YWE3N2MxOGI0ODk3MyJ9.wg_A4p7IrlzgVZW8DU19Tqo1pUKDnmh5jCaUIPsfVGI&download=%E6%96%AD%E6%B0%B4%E6%B5%81.mp3",
			},
					{
				title: "易燃易爆炸",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f00645bb221471e493c679f9dd4695983?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMDY0NWJiMjIxNDcxZTQ5M2M2NzlmOWRkNDY5NTk4MyJ9.6_Fg5OjRu_hGcNvW7KywzAICyJLzqXDEXW0AoOxSTx0&download=%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3",
			},
					{
				title: "白鸽",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0aae8e42562e3e170af02de6a421e1fa?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwYWFlOGU0MjU2MmUzZTE3MGFmMDJkZTZhNDIxZTFmYSJ9.88YNvJJQm_hYQcfXN8OTYRfQxAsjFlNnD5drdTde7Uk&download=%E7%99%BD%E9%B8%BD.mp3",
			},
					{
				title: "爱丫爱丫",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302gb938e3e3701aa482804b29d3ae0d63ca?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmdiOTM4ZTNlMzcwMWFhNDgyODA0YjI5ZDNhZTBkNjNjYSJ9.V4w1oZmFbC_QC2WXXNPfXIXFgZrNUcnpbdqijT-sONI&download=%E7%88%B1%E4%B8%AB%E7%88%B1%E4%B8%AB.mp3",
			},
					{
				title: "FUNRUN",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g5b157f2e22a727cd91927cc3d2c0a85d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc1YjE1N2YyZTIyYTcyN2NkOTE5MjdjYzNkMmMwYTg1ZCJ9.GpdwhaaTl7vsz-8x0OHTyOgrfCgxRCjok2wnzuzehZ4&download=FUNRUN.mp3",
			},
					{
				title: "1,2,3,4",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g3ba4f9f4dd400816f020ae1c859a6137?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmczYmE0ZjlmNGRkNDAwODE2ZjAyMGFlMWM4NTlhNjEzNyJ9.qcWpEEQDCHxsE-T3H3QDSP6gfCwWOBFabCi7cBKuSrI&download=1%2C2%2C3%2C4.mp3",
			},
					{
				title: "我的未来式（片段）",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g544bc73ea9e0b79787a488e44de8d227?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc1NDRiYzczZWE5ZTBiNzk3ODdhNDg4ZTQ0ZGU4ZDIyNyJ9.nDgomsCOEIPHhn2WjAwdG2dG0eVrz9n6J7azwSbz2BM&download=%E6%88%91%E7%9A%84%E6%9C%AA%E6%9D%A5%E5%BC%8F%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "越来越好",
				artist: "2022-03-18",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302g9db34c515250f9dd6ae7af3f667e0f1e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmc5ZGIzNGM1MTUyNTBmOWRkNmFlN2FmM2Y2NjdlMGYxZSJ9.KtdITshZ46mId2ZoU7xOawPgw-yJojqx5hu2b-yquCw&download=%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A5%BD.mp3",
			},
					{
				title: "红莲华（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbdd8f58bc9eb81a9214c7897fb6fcaff?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiZGQ4ZjU4YmM5ZWI4MWE5MjE0Yzc4OTdmYjZmY2FmZiJ9.qB06Nc9UK86LZVWzoupO2s2c0HUF8HWbxJ6JW6Xw1Q4&download=%E7%BA%A2%E8%8E%B2%E5%8D%8E%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Lemon（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fafed3afb2e8e8e5b70cf6a0b238b4a6b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhZmVkM2FmYjJlOGU4ZTViNzBjZjZhMGIyMzhiNGE2YiJ9.mbZYA2JqfnJIj_WakaTenX_k4_ra3F0paX0aLfnOyr8&download=Lemon%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "心墙",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff508ae8847b90018adc1c19d42e4c0fd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmNTA4YWU4ODQ3YjkwMDE4YWRjMWMxOWQ0MmU0YzBmZCJ9.ByDx94vgQBvdjz-E8m2YX02X2XzkozoE_WMtjnGUo3s&download=%E5%BF%83%E5%A2%99.mp3",
			},
					{
				title: "无人之岛",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3a48d45ee2e8779587ec26ac027ea896?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzYTQ4ZDQ1ZWUyZTg3Nzk1ODdlYzI2YWMwMjdlYTg5NiJ9.56YKRvcdDWm4JmRmSWbt7K2Zzgx4vDRmO8To2JtjVcM&download=%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",
			},
					{
				title: "全是爱",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f49bb9cb7b773013463df9d3d1c740f98?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0OWJiOWNiN2I3NzMwMTM0NjNkZjlkM2QxYzc0MGY5OCJ9.qRU-bhbQBKCt-cHYycM-_H6QB4uzl2BAmHg5dD1SFk8&download=%E5%85%A8%E6%98%AF%E7%88%B1.mp3",
			},
					{
				title: "鸦雀无声",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2399cc28ff974594bd21b950d6f04274?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyMzk5Y2MyOGZmOTc0NTk0YmQyMWI5NTBkNmYwNDI3NCJ9.ndu2ucpR_XqRNy6q9S9ZO2mZcCu_1iQaKbOwuZ5-LNE&download=%E9%B8%A6%E9%9B%80%E6%97%A0%E5%A3%B0.mp3",
			},
					{
				title: "你到底有没有爱过我（DJ片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb5fb0ddc70b622e9dc3c8dc46e1ba13e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiNWZiMGRkYzcwYjYyMmU5ZGMzYzhkYzQ2ZTFiYTEzZSJ9.4PhWyllGpBzxUJmlq9w2AQSLmrBw00mzpZQQ26H54qo&download=%E4%BD%A0%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E8%BF%87%E6%88%91%EF%BC%88DJ%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "不是因为寂寞才想你（DJ片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc37713b4eba7039f43b8f0c8071e1f34?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjMzc3MTNiNGViYTcwMzlmNDNiOGYwYzgwNzFlMWYzNCJ9.0Otd6q-vpA9R24hnZ8jwntOIvnzv3ccjfu8vdILUDMg&download=%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%AF%82%E5%AF%9E%E6%89%8D%E6%83%B3%E4%BD%A0%EF%BC%88DJ%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "恋爱画板",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302faf846c9e234bd0f62b733dd67a5bcd78?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhZjg0NmM5ZTIzNGJkMGY2MmI3MzNkZDY3YTViY2Q3OCJ9.Www0IWH3wR6yYbKFRQv1DCT5QRuK0UINZOTt89cEXBY&download=%E6%81%8B%E7%88%B1%E7%94%BB%E6%9D%BF.mp3",
			},
					{
				title: "哪里都是你（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6724e1a7188b1da8a7e6faa4455302f1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2NzI0ZTFhNzE4OGIxZGE4YTdlNmZhYTQ0NTUzMDJmMSJ9.HXpwMsAICCDKw4rtdZvSo6NUkGCJSb1m2D6U6mjUM7M&download=%E5%93%AA%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "11（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f9d2775dce8218174ecb3e9afca7694c4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5ZDI3NzVkY2U4MjE4MTc0ZWNiM2U5YWZjYTc2OTRjNCJ9.sVrndWYQaJNTt8sz3_ESDZwLV2AGxM8VfteNhBbOsVY&download=11%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "破茧（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f532a223ece45b375f34e4c1d2e6d1979?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MzJhMjIzZWNlNDViMzc1ZjM0ZTRjMWQyZTZkMTk3OSJ9.14_iQZLrULTeN8ZLhtX9_1qdREkkmWacujrNfVU9rWw&download=%E7%A0%B4%E8%8C%A7%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f13f62b80e9e00e5af9e5e872a793f0bf?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxM2Y2MmI4MGU5ZTAwZTVhZjllNWU4NzJhNzkzZjBiZiJ9.O1i45Ljt6nQue5ZkX84aCJ9AT_M6Of74Ft17Oi4nHmM&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "让泪化作相思雨（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f38868bae4d7806cbfaaeb80d21f6df19?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzODg2OGJhZTRkNzgwNmNiZmFhZWI4MGQyMWY2ZGYxOSJ9.-LdroqR4LNd--4q7F4UUkLR0gYKBefhlG17WJ5KWtxk&download=%E8%AE%A9%E6%B3%AA%E5%8C%96%E4%BD%9C%E7%9B%B8%E6%80%9D%E9%9B%A8%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "手放开（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc8e9fdaf6493aa3409cf0c6441d02f08?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjOGU5ZmRhZjY0OTNhYTM0MDljZjBjNjQ0MWQwMmYwOCJ9.5XYNioae4P-fs_MH2YqiFwh3nXkztEh1Vrguhv3Cbaw&download=%E6%89%8B%E6%94%BE%E5%BC%80%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "荷塘月色（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa0d1e5f46cb373edfec961fc9515b3e9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMGQxZTVmNDZjYjM3M2VkZmVjOTYxZmM5NTE1YjNlOSJ9.BDuuLp7ICt36nZY0aQfWrhans2A3C3nzDXabbRsgjZ8&download=%E8%8D%B7%E5%A1%98%E6%9C%88%E8%89%B2%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "猜不透（片段）",
				artist: "2022-03-14",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb73a9d1fb87da27e59a74818355d2b84?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiNzNhOWQxZmI4N2RhMjdlNTlhNzQ4MTgzNTVkMmI4NCJ9.Iacs_sW6gu4EIfIyN5AdUYJTiXNGJm4-R67Z1pfKdPo&download=%E7%8C%9C%E4%B8%8D%E9%80%8F%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "11（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3b4606fb0acb09b9fc1474bf33a08812?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzYjQ2MDZmYjBhY2IwOWI5ZmMxNDc0YmYzM2EwODgxMiJ9.6W14Eii-OgxRUXuajCGsj4L78PpSyPyUUgXRYw3n70k&download=11%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "不是因为寂寞才想你DJ（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb3fb501abdb8a44ee3abb1fa7a49e43c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiM2ZiNTAxYWJkYjhhNDRlZTNhYmIxZmE3YTQ5ZTQzYyJ9.eacZ1DhNHz0g4TGRyFX_JFV441s32VW9vyzOyGEi4jM&download=%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%AF%82%E5%AF%9E%E6%89%8D%E6%83%B3%E4%BD%A0DJ%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "那里都是你（片段）",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f58d3fe73af67113e2e9ef6564964f309?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1OGQzZmU3M2FmNjcxMTNlMmU5ZWY2NTY0OTY0ZjMwOSJ9.G7ozSw2n0y4khDjuPEgWZtWIiwGYQpwfK8-aLgY1rDw&download=%E9%82%A3%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "门没锁",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcb3c3d9aa72dc3cf93765783418c55a1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYjNjM2Q5YWE3MmRjM2NmOTM3NjU3ODM0MThjNTVhMSJ9.hrrHp-9TVBH9yCiJV6oc_4hlZA6mNSQkpRDIbg-90hI&download=%E9%97%A8%E6%B2%A1%E9%94%81.mp3",
			},
					{
				title: "空山新雨后",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302feedc78a6dffff417ae4b2a0d66d2cfc0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlZWRjNzhhNmRmZmZmNDE3YWU0YjJhMGQ2NmQyY2ZjMCJ9.WNs0AXzVd1toHYEu16OLwmq4BPnySj9osw44E9nVUCU&download=%E7%A9%BA%E5%B1%B1%E6%96%B0%E9%9B%A8%E5%90%8E.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff34627d9f11ff5cb47043f504495e17a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmMzQ2MjdkOWYxMWZmNWNiNDcwNDNmNTA0NDk1ZTE3YSJ9.7jes-EH8nzxZ6vQdPHVUOyeSI-aPQP8OwjOJv4heTSo&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "花海",
				artist: "2022-03-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f84d652045522b30fd96ca5f7d70af610?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4NGQ2NTIwNDU1MjJiMzBmZDk2Y2E1ZjdkNzBhZjYxMCJ9.ZENqFm_8Wn5cvF5drJdi85Y27L4j7iUiUNGZFA1ExbA&download=%E8%8A%B1%E6%B5%B7.mp3",
			},
					{
				title: "熬夜上瘾",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5cbec4711a747c0ee3916bfff14107cc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1Y2JlYzQ3MTFhNzQ3YzBlZTM5MTZiZmZmMTQxMDdjYyJ9.apTp3H2Hb4oaEmRDa92ZStTWLdNOs3M0S-OS_G9FgVU&download=%E7%86%AC%E5%A4%9C%E4%B8%8A%E7%98%BE.mp3",
			},
					{
				title: "过客（片段）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f52692a6eb68361b1deee282922352792?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MjY5MmE2ZWI2ODM2MWIxZGVlZTI4MjkyMjM1Mjc5MiJ9.2wRRZAl5wTnn-jphvPfaTxL68Wm4iNTNdAUBVw2IV6w&download=%E8%BF%87%E5%AE%A2%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "明明就（追求完美版）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdb199175cdb0afb494f0d5315d176dd0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkYjE5OTE3NWNkYjBhZmI0OTRmMGQ1MzE1ZDE3NmRkMCJ9.BugPQT5ln_o2Hxmzzj8zR1XSOPEFKBvIWo5SAQippRA&download=%E6%98%8E%E6%98%8E%E5%B0%B1%EF%BC%88%E8%BF%BD%E6%B1%82%E5%AE%8C%E7%BE%8E%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "像鱼",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff26eb749d1e14d8990c75c168a39deeb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmMjZlYjc0OWQxZTE0ZDg5OTBjNzVjMTY4YTM5ZGVlYiJ9.LSWiUBtZytFRhCwMQV0XNnpasYTBZ8G_m9BOIMY1zXM&download=%E5%83%8F%E9%B1%BC.mp3",
			},
					{
				title: "白月光与朱砂痣（片段）",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8679c0f18d9c7072036de12419230ebc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4Njc5YzBmMThkOWM3MDcyMDM2ZGUxMjQxOTIzMGViYyJ9.u338LQfwgWDpwexPhCYZX4dpqFniT1PkshzwdwLN5_8&download=%E7%99%BD%E6%9C%88%E5%85%89%E4%B8%8E%E6%9C%B1%E7%A0%82%E7%97%A3%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "星辰大海",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6942a1f2552fe1c87b15e52c687a060c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2OTQyYTFmMjU1MmZlMWM4N2IxNWU1MmM2ODdhMDYwYyJ9.gIBFh5StrjHKVrJC_xWlPhuiycPnpqgsyAF7dcK6niM&download=%E6%98%9F%E8%BE%B0%E5%A4%A7%E6%B5%B7.mp3",
			},
					{
				title: "坏女孩",
				artist: "2022-03-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe41e973b54ee3f28b929a1db718ff5c0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlNDFlOTczYjU0ZWUzZjI4YjkyOWExZGI3MThmZjVjMCJ9.57beaNmFEkNHpYmjLPMd15bMcT9QRIqCzQPgAzsVT_Y&download=%E5%9D%8F%E5%A5%B3%E5%AD%A9.mp3",
			},
					{
				title: "不加班宣言",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f003fcd685cf82e3c892fc19bc3b7c666?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMDNmY2Q2ODVjZjgyZTNjODkyZmMxOWJjM2I3YzY2NiJ9.8gkuZQit2zl-h-4Ha43X967aGwvqc-LL_-8nLi2o6GU&download=%E4%B8%8D%E5%8A%A0%E7%8F%AD%E5%AE%A3%E8%A8%80.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f00c702985d1e3d4f00240a74adc02b61?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMGM3MDI5ODVkMWUzZDRmMDAyNDBhNzRhZGMwMmI2MSJ9.d1wGKR5xo7JHmFBy8yFfew4i8_mIOqacJyEIO-wwhGE&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "叹",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f472319bd79f055c410c6d9f2ce7161ac?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0NzIzMTliZDc5ZjA1NWM0MTBjNmQ5ZjJjZTcxNjFhYyJ9.pMvbaJJYDeyci3KVzcmRnYyQiEy-Btmp7xyejsb5O1I&download=%E5%8F%B9.mp3",
			},
					{
				title: "无人之岛",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f34265cbade0c24cbcbd05dff07148a44?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNDI2NWNiYWRlMGMyNGNiY2JkMDVkZmYwNzE0OGE0NCJ9.kF8yQogLNkEDjnRTlJFcFMEBYDwXjZj3fF0aAsM1bXQ&download=%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",
			},
					{
				title: "Dinosaur恐龙",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2cd4e81dbc7a6d91589154de76f9d7e6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyY2Q0ZTgxZGJjN2E2ZDkxNTg5MTU0ZGU3NmY5ZDdlNiJ9.DRzF_hdedrcL6zIDaZTLe3EW0ECSlY7D49R0cdqeNkI&download=Dinosaur%E6%81%90%E9%BE%99.mp3",
			},
					{
				title: "一吻之间",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f9947a0f3f5cadbde5750429d3e5cf52d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5OTQ3YTBmM2Y1Y2FkYmRlNTc1MDQyOWQzZTVjZjUyZCJ9.AD0D9ZsTNgQ76Zq_JWLsnCC2PoBhpRxpUi7NmazUsR8&download=%E4%B8%80%E5%90%BB%E4%B9%8B%E9%97%B4.mp3",
			},
					{
				title: "你（片段）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f47c4bfa7bf00be1dddacd40223e60d5e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0N2M0YmZhN2JmMDBiZTFkZGRhY2Q0MDIyM2U2MGQ1ZSJ9.0aPOyvsb_xiinnlcYWgqxFDE31-JDfZXbkBXP7T8UIM&download=%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "不是因为寂寞才想你（DJ版）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6d6e3e6d0dd8b730789ce30694cff238?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2ZDZlM2U2ZDBkZDhiNzMwNzg5Y2UzMDY5NGNmZjIzOCJ9.pm1SL1R1AktN7bAiNh7yQXcb_pMtyzr9rnPIfC7sfgM&download=%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%AF%82%E5%AF%9E%E6%89%8D%E6%83%B3%E4%BD%A0%EF%BC%88DJ%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "你到底有没有爱过我（DJ版）",
				artist: "2022-03-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f94b9e5a6825f2bf36f824e6f82ff7a5a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTcyOCwiaWF0IjoxNjUwNzk2OTI4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5NGI5ZTVhNjgyNWYyYmYzNmY4MjRlNmY4MmZmN2E1YSJ9.Z61BVdoOdKn2cXuxSGr_JTt47fGUjQ3Z7wl8VDQWCWw&download=%E4%BD%A0%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E8%BF%87%E6%88%91%EF%BC%88DJ%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-02-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f13cdf93a43507e7504c9ca34aae4f495?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxM2NkZjkzYTQzNTA3ZTc1MDRjOWNhMzRhYWU0ZjQ5NSJ9.unen77KnzkM6sEPZ3DuEdlDagikQSImbbBYbK3WmEIo&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "素颜",
				artist: "2022-02-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa3502676444c657d7a09b42690f4337e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMzUwMjY3NjQ0NGM2NTdkN2EwOWI0MjY5MGY0MzM3ZSJ9.vJcEpdyu8LjG2aKRTj3j33QirwA-EQ6K51qU2kKZFnc&download=%E7%B4%A0%E9%A2%9C.mp3",
			},
					{
				title: "Bad Guy英中混合（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f539a7e59878aa71a1c02ff3d587d9756?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MzlhN2U1OTg3OGFhNzFhMWMwMmZmM2Q1ODdkOTc1NiJ9.hUM82EGc8pavxNmr9nGpwxb_ybF6Rf_EcUSlWARVdUQ&download=Bad%20Guy%E8%8B%B1%E4%B8%AD%E6%B7%B7%E5%90%88%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Someone Like You英中混合（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc0d87026945159ac97d2b44d4edbc44c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjMGQ4NzAyNjk0NTE1OWFjOTdkMmI0NGQ0ZWRiYzQ0YyJ9.rSNqZugn-PEk4KDd2cfpvwqKqPOzn3rGaqTtDiCRf2Q&download=Someone%20Like%20You%E8%8B%B1%E4%B8%AD%E6%B7%B7%E5%90%88%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "夏天的风",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f003dcce17f2f88554c9de187ff92dc09?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMDNkY2NlMTdmMmY4ODU1NGM5ZGUxODdmZjkyZGMwOSJ9.exmj5wGOHW2lfszpX7IylFnROe81Vi3YBqV9TDuvzYk&download=%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.mp3",
			},
					{
				title: "会呼吸的痛",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1d62c376306d7c7d94c0f25348e66aef?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxZDYyYzM3NjMwNmQ3YzdkOTRjMGYyNTM0OGU2NmFlZiJ9.JjE2WYDQ3dCJQJI7nfomi7mqPnOckAQDqZ2aDe9v2Hk&download=%E4%BC%9A%E5%91%BC%E5%90%B8%E7%9A%84%E7%97%9B.mp3",
			},
					{
				title: "一生所爱（片段）",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc3972a6091b01952967bb4b16f7db827?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjMzk3MmE2MDkxYjAxOTUyOTY3YmI0YjE2ZjdkYjgyNyJ9.bGXLjvKjJtfJHrpZeIs-G2zNx3xu7qFEJxubCyyi6lw&download=%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "A",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcc3d33125304f8c1e914b1cd6712f949?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYzNkMzMxMjUzMDRmOGMxZTkxNGIxY2Q2NzEyZjk0OSJ9.DU_crsRcjAFnLH5gKusOpuno9iK13SQM5wDuuPs33nU&download=A.I.N.Y%E7%88%B1%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "只是太爱你",
				artist: "2022-02-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe9e034b1b2538ef0d5eee24534dbf5b3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlOWUwMzRiMWIyNTM4ZWYwZDVlZWUyNDUzNGRiZjViMyJ9.jxeVXr1n529sDMACyPShfgaglrx0G27mZNv2NbQLBZw&download=%E5%8F%AA%E6%98%AF%E5%A4%AA%E7%88%B1%E4%BD%A0.mp3",
			},
					{
				title: "有没有那么一首歌",
				artist: "2022-02-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f93984dfc8007a1ce6406b49da0b23037?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5Mzk4NGRmYzgwMDdhMWNlNjQwNmI0OWRhMGIyMzAzNyJ9.V5NDJiCLpeak4mrRyHKamHpZ6PjJE7uROJwz-hD_KcA&download=%E6%9C%89%E6%B2%A1%E6%9C%89%E9%82%A3%E4%B9%88%E4%B8%80%E9%A6%96%E6%AD%8C.mp3",
			},
					{
				title: "喷火龙《兰亭序》",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff77629773897e567e5b3b2b67149c8a0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmNzc2Mjk3NzM4OTdlNTY3ZTViM2IyYjY3MTQ5YzhhMCJ9.2h-C6zF_V-u99CTG3uP6eHH_Byo1b7LTxQbfRDGdRz0&download=%E5%96%B7%E7%81%AB%E9%BE%99%E3%80%8A%E5%85%B0%E4%BA%AD%E5%BA%8F%E3%80%8B.mp3",
			},
					{
				title: "风间澈《孤勇者》",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f05a10af4b44de6fbf499129a7d0b62cc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwNWExMGFmNGI0NGRlNmZiZjQ5OTEyOWE3ZDBiNjJjYyJ9.CsCWK57VC1RwZFhogojmTr23UvVmsvCUL1LgXATs5Y8&download=%E9%A3%8E%E9%97%B4%E6%BE%88%E3%80%8A%E5%AD%A4%E5%8B%87%E8%80%85%E3%80%8B.mp3",
			},
					{
				title: "方舟《说书人》",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcc7159f8e7f90ad218fc26be506819fe?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYzcxNTlmOGU3ZjkwYWQyMThmYzI2YmU1MDY4MTlmZSJ9.zxeSiD3axmhZ3tOfXCEaURcLRGCwSdKZxfzW6VIUV2k&download=%E6%96%B9%E8%88%9F%E3%80%8A%E8%AF%B4%E4%B9%A6%E4%BA%BA%E3%80%8B.mp3",
			},
					{
				title: "后继者",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa2e55dc982c66ab83054c0ad8a6d1611?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMmU1NWRjOTgyYzY2YWI4MzA1NGMwYWQ4YTZkMTYxMSJ9._RtQUpdARHijr8HOZddLkfvhJDTX_mfUnZGWEewygik&download=%E5%90%8E%E7%BB%A7%E8%80%85.mp3",
			},
					{
				title: "小可爱与小领带（片段）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f19afc9ab3a57c6e15d7712ab6691712a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxOWFmYzlhYjNhNTdjNmUxNWQ3NzEyYWI2NjkxNzEyYSJ9.kCf9qvnNOM-KSZo8R8BZSxDKWf7_N5kgHpUEsO7S4xQ&download=%E5%B0%8F%E5%8F%AF%E7%88%B1%E4%B8%8E%E5%B0%8F%E9%A2%86%E5%B8%A6%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Puma（Rap团）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f361f4c14c15e2a78b214b92425a48cde?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNjFmNGMxNGMxNWUyYTc4YjIxNGI5MjQyNWE0OGNkZSJ9.TnCeHZyMJYHo86OKrTN9opbfy2PbSqkAkpzSyRp5W-M&download=Puma%EF%BC%88Rap%E5%9B%A2%EF%BC%89.mp3",
			},
					{
				title: "错位时空（片段）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3ea0976f53cebe85c66aef3223370b4d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzZWEwOTc2ZjUzY2ViZTg1YzY2YWVmMzIyMzM3MGI0ZCJ9.Y324NYdGCJqWKTzt4v6gn1ULrezdVy5UPdfbabXnORQ&download=%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "青鸟日文（片段）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fde3cd4920c8d8c1bc36bc71613e141e2?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZTNjZDQ5MjBjOGQ4YzFiYzM2YmM3MTYxM2UxNDFlMiJ9.DFmlXU9CR2Pa4XSrM6vGBjb1M9tOKFHIpOlEJDURRBc&download=%E9%9D%92%E9%B8%9F%E6%97%A5%E6%96%87%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "你孤寡",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8bc7b758cc2d621683cfec28c3d37235?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4YmM3Yjc1OGNjMmQ2MjE2ODNjZmVjMjhjM2QzNzIzNSJ9.fDV8guT-UXaFX8FhLV3vuBwClt1NcgUzrYSQxX3TzB0&download=%E4%BD%A0%E5%AD%A4%E5%AF%A1.mp3",
			},
					{
				title: "分手快乐（改编）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302faedf76e091269d0ab370f47b4720adf6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhZWRmNzZlMDkxMjY5ZDBhYjM3MGY0N2I0NzIwYWRmNiJ9.q1D5CXX_uSfp1J4sr_jHaFdFPWxqTDFSNb9PuQJzABM&download=%E5%88%86%E6%89%8B%E5%BF%AB%E4%B9%90%EF%BC%88%E6%94%B9%E7%BC%96%EF%BC%89.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8d7b1d82ad01cd151e24d0cb1a6a14fd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4ZDdiMWQ4MmFkMDFjZDE1MWUyNGQwY2IxYTZhMTRmZCJ9.n01dCByGDM-QfzRmai5W0UlrmNCGxWHrr5fFl3ji4io&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "囍",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc60de20015d78d9a9495303ba89712f4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjNjBkZTIwMDE1ZDc4ZDlhOTQ5NTMwM2JhODk3MTJmNCJ9.AWC0mLwfusoJ9kTGv95HVgFO5HkULiAV0olY-Ti5V4k&download=%E5%9B%8D.mp3",
			},
					{
				title: "小永远",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8b9ab13cc31d87ad7872abe755a6c7cd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4YjlhYjEzY2MzMWQ4N2FkNzg3MmFiZTc1NWE2YzdjZCJ9.PcVWEYF0lI53tzDJ9IJTWqz4wmDrXGmH_gve1HAPQYU&download=%E5%B0%8F%E6%B0%B8%E8%BF%9C.mp3",
			},
					{
				title: "易燃易爆炸",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0adff4c74592853322f6bc545a841b47?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwYWRmZjRjNzQ1OTI4NTMzMjJmNmJjNTQ1YTg0MWI0NyJ9.QVTUdS10FfWWC35Yt_aelO09uwA6ZEBM8Fjk3iyAQX8&download=%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f74ff471bf20de3abc4a1d31d5c9034f5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3NGZmNDcxYmYyMGRlM2FiYzRhMWQzMWQ1YzkwMzRmNSJ9.YjBXFfgf6HMUsPIWHymkBkhHFZIQBLDXFQYaYNQzM7A&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "鸦雀无声",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7a19d251d4629cd1357c30be2498d9c1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YTE5ZDI1MWQ0NjI5Y2QxMzU3YzMwYmUyNDk4ZDljMSJ9.jnJfCIWTBXoAZSFEEih4ILYRkBxzZc4fu0rYj9o6qmo&download=%E9%B8%A6%E9%9B%80%E6%97%A0%E5%A3%B0.mp3",
			},
					{
				title: "Only Girl",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4207f63eb9429adc0cbf93be38abe0a3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0MjA3ZjYzZWI5NDI5YWRjMGNiZjkzYmUzOGFiZTBhMyJ9.tp0_8pFtxxEJTERr1OkQotJ0OsRU-TNfak6nv6urlEs&download=Only%20Girl.mp3",
			},
					{
				title: "我们的爱（片段）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1ed8e1fcf7cdd38954fbc3274afe69ea?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxZWQ4ZTFmY2Y3Y2RkMzg5NTRmYmMzMjc0YWZlNjllYSJ9.OgxaYo0-moP72doDX0D24HEdzFaLqIsWAzVFDTgnHx8&download=%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B1%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "生生世世爱",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f34ba89f7de031d551a9f4926758375bf?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNGJhODlmN2RlMDMxZDU1MWE5ZjQ5MjY3NTgzNzViZiJ9.SHdF0fY3BlF_Y09ysyYmWkd7eQc9MX0dgt5eIPKKXT0&download=%E7%94%9F%E7%94%9F%E4%B8%96%E4%B8%96%E7%88%B1.mp3",
			},
					{
				title: "Onepa 2（海豚音）",
				artist: "2022-02-15 审视大会",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f99ceae71b4264c3d7da59254b92ddcdb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5OWNlYWU3MWI0MjY0YzNkN2RhNTkyNTRiOTJkZGNkYiJ9.k1xolZmo3Q7SGVLLI089xCXSBEOmkMuXaU3ns14pBC4&download=Onepa%202%EF%BC%88%E6%B5%B7%E8%B1%9A%E9%9F%B3%EF%BC%89.mp3",
			},
					{
				title: "童话镇（晚安版）",
				artist: "2022-02-12",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f45cc7bd32f9924cef5c360e91945db85?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0NWNjN2JkMzJmOTkyNGNlZjVjMzYwZTkxOTQ1ZGI4NSJ9.7bqqHFJzCgSmwFLPkcqYMMQa1rIR6xVpMrs0L5gLzL0&download=%E7%AB%A5%E8%AF%9D%E9%95%87%EF%BC%88%E6%99%9A%E5%AE%89%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "11+道歉",
				artist: "2022-02-11",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6214c930d5aeb91b97c54fcd97f577b7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MjE0YzkzMGQ1YWViOTFiOTdjNTRmY2Q5N2Y1NzdiNyJ9.ZfR-_iq9YMuOAyQfPfXgOJcsugMs5hmsGi7ubeS7W5A&download=11%2B%E9%81%93%E6%AD%89.mp3",
			},
					{
				title: "嚣张领奖词",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa00f9113ab5e5ca675f4f0e419089bc0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMDBmOTExM2FiNWU1Y2E2NzVmNGYwZTQxOTA4OWJjMCJ9.JmrZ-ZRpub0Ql8qLwJnR2PwgEpUPoJqa59Bv5dfTAbc&download=%E5%9A%A3%E5%BC%A0%E9%A2%86%E5%A5%96%E8%AF%8D.mp3",
			},
					{
				title: "潮汐",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcbc24c958b6ba5cd84bfe87face89194?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYmMyNGM5NThiNmJhNWNkODRiZmU4N2ZhY2U4OTE5NCJ9.ahFpQfDhTXbgnBYtMun7C4kPM110ybwqkdqLERQ412A&download=%E6%BD%AE%E6%B1%90.mp3",
			},
					{
				title: "思念是一种病",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa16e391be66fa196169d11018d676351?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMTZlMzkxYmU2NmZhMTk2MTY5ZDExMDE4ZDY3NjM1MSJ9.5xld0ap5wj0NbPPr3VKV0H8GAZ7ok6WZgfkouDJwYKA&download=%E6%80%9D%E5%BF%B5%E6%98%AF%E4%B8%80%E7%A7%8D%E7%97%85.mp3",
			},
					{
				title: "叹",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f67d7cd0d0e9acfbf8ded596b77f65dab?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2N2Q3Y2QwZDBlOWFjZmJmOGRlZDU5NmI3N2Y2NWRhYiJ9.1AKEUlIdEYvTVDQpx67HviOvsgxOXaW9nl_LOcCJP7Q&download=%E5%8F%B9.mp3",
			},
					{
				title: "嘉宾",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f568720ce3d50be7bac513f48f50462e0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1Njg3MjBjZTNkNTBiZTdiYWM1MTNmNDhmNTA0NjJlMCJ9.WotfZeS2qGurwRWEBvzI0bogpEJ4NJM4ginapGFiXf0&download=%E5%98%89%E5%AE%BE.mp3",
			},
					{
				title: "11（片段）",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4749a68c81df7e0d0523ad9818c7ec5e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0NzQ5YTY4YzgxZGY3ZTBkMDUyM2FkOTgxOGM3ZWM1ZSJ9.Tt5Ij3cYhPqDRf8pW4kMmEuV1k1PqxyAF5mCT_QDN5w&download=11%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "哪里都是你（片段）",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdd68e8cf682b26a60e5241db82c18542?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZDY4ZThjZjY4MmIyNmE2MGU1MjQxZGI4MmMxODU0MiJ9.ST3_hFAq0FO1e1Da2V2ribkhVfEgzql4au0uuw-cDtw&download=%E5%93%AA%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "光年之外",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f9c03a635be2928c9b0f99ea27ab48c65?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5YzAzYTYzNWJlMjkyOGM5YjBmOTllYTI3YWI0OGM2NSJ9.5BslRpT86lqv8nJ_nl3b1f-N2LxLXZDGAjjjISOeCr4&download=%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.mp3",
			},
					{
				title: "Love Story英中混合",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6e64bf9a8bb144a900b88f7575ef92b1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2ZTY0YmY5YThiYjE0NGE5MDBiODhmNzU3NWVmOTJiMSJ9.G6eOEcspZkRPTmeTGaZrq4CYfOXRqwr-s4zpbYDeDz8&download=Love%20Story%E8%8B%B1%E4%B8%AD%E6%B7%B7%E5%90%88.mp3",
			},
					{
				title: "Let It Go",
				artist: "2022-02-10 主播之夜",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f9eded858ec301843116c099db8c6dc2c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5ZWRlZDg1OGVjMzAxODQzMTE2YzA5OWRiOGM2ZGMyYyJ9.FrZmnDV7HULaOcMLTwdxq8bnQrIWjv2npIjJXrZ7aqQ&download=Let%20It%20Go.mp3",
			},
					{
				title: "Tik Tok",
				artist: "2022-02-04",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb8ec5c9f6f6ffc7fb8d3a900b0a36161?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiOGVjNWM5ZjZmNmZmYzdmYjhkM2E5MDBiMGEzNjE2MSJ9.73EfKH4SwRDLRGsE3I5QtXpBHP20cPL2UcPEVUV2Fzc&download=Tik%20Tok.mp3",
			},
					{
				title: "水星记",
				artist: "2022-02-04",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa9656b9330d261aa4aa81024e566e6b7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhOTY1NmI5MzMwZDI2MWFhNGFhODEwMjRlNTY2ZTZiNyJ9.P4IqNUdhllHjF8Sg5Ab7mPPJjXnhBYMf4Wm51m_JonM&download=%E6%B0%B4%E6%98%9F%E8%AE%B0.mp3",
			},
					{
				title: "下雨天",
				artist: "2022-02-04",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7c9025f47ac854203d7582f61c7f7649?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YzkwMjVmNDdhYzg1NDIwM2Q3NTgyZjYxYzdmNzY0OSJ9.spxuOywRfXH3OeYag94ZuHbyy87UoXDBVQernUX5XGo&download=%E4%B8%8B%E9%9B%A8%E5%A4%A9.mp3",
			},
					{
				title: "1,2,3,4",
				artist: "2022-02-04",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ffec16e928abb402ff6827b14932af318?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmZWMxNmU5MjhhYmI0MDJmZjY4MjdiMTQ5MzJhZjMxOCJ9.0qwRHONrJVPBUMVHbqPRo6nPpn3GH66jzLSTwqEshS0&download=1%2C2%2C3%2C4.mp3",
			},
					{
				title: "画沙（片段）",
				artist: "2022-02-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe05a01473285d073abd421b09c9e5186?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlMDVhMDE0NzMyODVkMDczYWJkNDIxYjA5YzllNTE4NiJ9.giiTc6D2t69E_sLRDvGcBwFfrOFJdbvcJsYSl7QP7OQ&download=%E7%94%BB%E6%B2%99%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "小领带与小可爱",
				artist: "2022-02-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f88151db908c42ccbd588f00d784798e1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4ODE1MWRiOTA4YzQyY2NiZDU4OGYwMGQ3ODQ3OThlMSJ9.6d6byHD_V9GkV1L8ckFzr5cvWvuLieuZCNQKYipn_-I&download=%E5%B0%8F%E9%A2%86%E5%B8%A6%E4%B8%8E%E5%B0%8F%E5%8F%AF%E7%88%B1.mp3",
			},
					{
				title: "海芋恋",
				artist: "2022-02-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f439fde6cef350c3162f18b8d25d862b1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0MzlmZGU2Y2VmMzUwYzMxNjJmMThiOGQyNWQ4NjJiMSJ9.vRzdINUG-Gj2_Pn6R1FA4WfFnXlPoMpe3hsf3C0oWQ8&download=%E6%B5%B7%E8%8A%8B%E6%81%8B.mp3",
			},
					{
				title: "鸦雀无声",
				artist: "2022-02-02",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7b8f0b63f5e02ac366a0f5472e3212a9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTU4OCwiaWF0IjoxNjUwNzk2Nzg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YjhmMGI2M2Y1ZTAyYWMzNjZhMGY1NDcyZTMyMTJhOSJ9.SVsjx0_4Std42lDueHwMGLTAHqx4aQOyU_4uoAYi1Go&download=%E9%B8%A6%E9%9B%80%E6%97%A0%E5%A3%B0.mp3",
			},
					{
				title: "夏天的风",
				artist: "2022-01-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f50a075c72a8c6b77de9304e8cb6acb3a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MGEwNzVjNzJhOGM2Yjc3ZGU5MzA0ZThjYjZhY2IzYSJ9.RqrUHKtHVPCuBw60XgM_JPV6OB-BZsnPgBjKHOn4vXg&download=%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.mp3",
			},
					{
				title: "关键词",
				artist: "2022-01-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6bcbea1a97a23827649e55170103b230?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2YmNiZWExYTk3YTIzODI3NjQ5ZTU1MTcwMTAzYjIzMCJ9.mwB9xA7t_wIJNatPryNVzcd-TQ0yTvO8xn9i-qq87ss&download=%E5%85%B3%E9%94%AE%E8%AF%8D.mp3",
			},
					{
				title: "我只有我",
				artist: "2022-01-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fabb393548eec4a3fa79785bb82eacc38?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYmIzOTM1NDhlZWM0YTNmYTc5Nzg1YmI4MmVhY2MzOCJ9.PzdmiCun9kAS3HL1jaCcmcWItQ_ygPa-W8q7lTmEkEw&download=%E6%88%91%E5%8F%AA%E6%9C%89%E6%88%91.mp3",
			},
					{
				title: "光的方向",
				artist: "2022-01-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa0d7efb2d9a81e8ea9ab992864f81ede?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMGQ3ZWZiMmQ5YTgxZThlYTlhYjk5Mjg2NGY4MWVkZSJ9.QPNAgqTEr_gfeFiuC8gMdrK26_JXFuymGWk84EmV1fY&download=%E5%85%89%E7%9A%84%E6%96%B9%E5%90%91.mp3",
			},
					{
				title: "说散就散",
				artist: "2022-01-28",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f339d7053b95f3362847243ee5db0c67f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzMzlkNzA1M2I5NWYzMzYyODQ3MjQzZWU1ZGIwYzY3ZiJ9.2_KWS073qTKn9VfU9hQWfrDmBkD1ZLlWY2y7iHlZQ50&download=%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3.mp3",
			},
					{
				title: "Tik Tok",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa991407a63c0eadbb0e562eacba3386e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhOTkxNDA3YTYzYzBlYWRiYjBlNTYyZWFjYmEzMzg2ZSJ9.2ebF-3M-H3ZrNL6OFF3gyVfK16a0KUWwJ3hQ-DrFS2M&download=Tik%20Tok.mp3",
			},
					{
				title: "Volar",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f10f0ef2b44ee8eedb79c34359cf43444?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxMGYwZWYyYjQ0ZWU4ZWVkYjc5YzM0MzU5Y2Y0MzQ0NCJ9.Wj9lEiVZoF-4UIH2WJ8B-Qr2WgaMDK5nP0dRCyFXDYg&download=Volar.mp3",
			},
					{
				title: "掉了",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6ebe58463c560288fe44f319aa536c6c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2ZWJlNTg0NjNjNTYwMjg4ZmU0NGYzMTlhYTUzNmM2YyJ9.610FOP4lDZ4GvwsYCf5puGinYNmE7Gzn_P9IGog3LgM&download=%E6%8E%89%E4%BA%86.mp3",
			},
					{
				title: "你把我灌醉",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc8582e3388c474424eb94a857f20e6b9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjODU4MmUzMzg4YzQ3NDQyNGViOTRhODU3ZjIwZTZiOSJ9.8l_CUwmjcTiU9fU7v6xBbXY4pbxMuehDXh9Dd_UwPhA&download=%E4%BD%A0%E6%8A%8A%E6%88%91%E7%81%8C%E9%86%89.mp3",
			},
					{
				title: "光的方向",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302faa0fedd918764334491590415c6be7e1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYTBmZWRkOTE4NzY0MzM0NDkxNTkwNDE1YzZiZTdlMSJ9.qx_dBnezi-Qykx6EaPnph2TD3Ds1Qabk_WUhCEaC1_k&download=%E5%85%89%E7%9A%84%E6%96%B9%E5%90%91.mp3",
			},
					{
				title: "越来越好",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe9a4ba9b4852f0e237d70669fa86dc9c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlOWE0YmE5YjQ4NTJmMGUyMzdkNzA2NjlmYTg2ZGM5YyJ9.eUYX6_iQnlYmqQpV9KBnEslioLMzzh11B6J6UC6220U&download=%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A5%BD.mp3",
			},
					{
				title: "无人之岛",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f208c721d0979fc32f245b3e4660f2e8e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyMDhjNzIxZDA5NzlmYzMyZjI0NWIzZTQ2NjBmMmU4ZSJ9.rKbQFO12t6YZinbMQ0CDXd2p2oEcLJUmLRm8fLBytmU&download=%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",
			},
					{
				title: "全是爱",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbe19943d879f07495f946542fcca32ec?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiZTE5OTQzZDg3OWYwNzQ5NWY5NDY1NDJmY2NhMzJlYyJ9.uhZAbjPT3Xw3SJdoUnUeJ5CIzwx5iyAq079eE2Mfu5c&download=%E5%85%A8%E6%98%AF%E7%88%B1.mp3",
			},
					{
				title: "荷塘月色",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f27c4705c278b847bf32887cb29c74e64?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyN2M0NzA1YzI3OGI4NDdiZjMyODg3Y2IyOWM3NGU2NCJ9.FRfuzGHCaIQxRfhOExEE71AGdNpjwi5ZlFtD5VUJqR8&download=%E8%8D%B7%E5%A1%98%E6%9C%88%E8%89%B2.mp3",
			},
					{
				title: "酒醉的蝴蝶DJ版",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb863099b2aa5bccf3045ebe04f2adc87?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiODYzMDk5YjJhYTViY2NmMzA0NWViZTA0ZjJhZGM4NyJ9.eOJp1wBlZIgf1XWa0-Ds6BFwviDuhiPAJ110hY3Q1Gs&download=%E9%85%92%E9%86%89%E7%9A%84%E8%9D%B4%E8%9D%B6DJ%E7%89%88.mp3",
			},
					{
				title: "Buttons（烫嘴）",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ffb6668c5395fe07d0dd340bc4f82c05b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmYjY2NjhjNTM5NWZlMDdkMGRkMzQwYmM0ZjgyYzA1YiJ9.O2KUGLd7IMcqNHlGSVlgCeByVL7RB7Pwo-Im7NSqfW0&download=Buttons%EF%BC%88%E7%83%AB%E5%98%B4%EF%BC%89.mp3",
			},
					{
				title: "鸦雀无声",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc4394ba72242ab21ae78f506d10e053f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjNDM5NGJhNzIyNDJhYjIxYWU3OGY1MDZkMTBlMDUzZiJ9.Bixc-nKdwHxJ4Z31sKJXaHSyRHXP_zrdKIksw-mCGsw&download=%E9%B8%A6%E9%9B%80%E6%97%A0%E5%A3%B0.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdf90a1342abe76eff94535757cc46a30?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZjkwYTEzNDJhYmU3NmVmZjk0NTM1NzU3Y2M0NmEzMCJ9.tVc82eFdNAjehmlsSCej2IZFp75i7STQKJqaulS1nCQ&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "飘向北方",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe4439f297c803bcc96028c44dc0b0e5b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlNDQzOWYyOTdjODAzYmNjOTYwMjhjNDRkYzBiMGU1YiJ9.zitOSHN0QcIA752CeT8g7nKAggrljr1i80YGL_Cn2o0&download=%E9%A3%98%E5%90%91%E5%8C%97%E6%96%B9.mp3",
			},
					{
				title: "断水流",
				artist: "2022-01-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc7be0e494914cc59ef7c32a5c6edff98?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjN2JlMGU0OTQ5MTRjYzU5ZWY3YzMyYTVjNmVkZmY5OCJ9.0ksKItPCC_-3S2jMqsChh8cqaEBJgTyAJRa_vrUpQ3c&download=%E6%96%AD%E6%B0%B4%E6%B5%81.mp3",
			},
					{
				title: "掉了",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2d73a6f612d97214060c18f7c816c56f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyZDczYTZmNjEyZDk3MjE0MDYwYzE4ZjdjODE2YzU2ZiJ9._18wUVHxa8Y50WvHLbAX6B6pHsGVPQUvebjjeLBEjhA&download=%E6%8E%89%E4%BA%86.mp3",
			},
					{
				title: "淋雨一直走",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2b4cfd7b59600908d058e3c619e55415?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyYjRjZmQ3YjU5NjAwOTA4ZDA1OGUzYzYxOWU1NTQxNSJ9.3oHkQfJUqOoU8CM7osR7kC3Cs5a09mkY-ouvhiFWdt0&download=%E6%B7%8B%E9%9B%A8%E4%B8%80%E7%9B%B4%E8%B5%B0.mp3",
			},
					{
				title: "靠近一点点",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1c18a7913285c9a6ebf5535415eabbfa?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxYzE4YTc5MTMyODVjOWE2ZWJmNTUzNTQxNWVhYmJmYSJ9.0VAkJLB1x_K7fVMcR-5FLVMbQ8TO7WSg_dfsxpM0VYk&download=%E9%9D%A0%E8%BF%91%E4%B8%80%E7%82%B9%E7%82%B9.mp3",
			},
					{
				title: "叹",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbc64d7e1d30d44c3d46a6244a5c74e92?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiYzY0ZDdlMWQzMGQ0NGMzZDQ2YTYyNDRhNWM3NGU5MiJ9.ADtMQNJwmo3oNPF8r9Pgz50vKOCkpdh5tKDR3Ld26Fc&download=%E5%8F%B9.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f34ccbd1a4f02be0d3ec70a8c6ebfc6a1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNGNjYmQxYTRmMDJiZTBkM2VjNzBhOGM2ZWJmYzZhMSJ9.OaBBv448Q4gSG9r7TjDKYfIoYRcLNZDKCk4D0MrY_sM&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "咎由自取（被超火咬）",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f47dd5c2c21583e6a20c97edd9d9160fc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0N2RkNWMyYzIxNTgzZTZhMjBjOTdlZGQ5ZDkxNjBmYyJ9.NHVbCag6D6PLjHEbjAIGNpCZjiGqrvYU1dlF0EO6wRE&download=%E5%92%8E%E7%94%B1%E8%87%AA%E5%8F%96%EF%BC%88%E8%A2%AB%E8%B6%85%E7%81%AB%E5%92%AC%EF%BC%89.mp3",
			},
					{
				title: "不得不爱（改编）",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f673bc8c3190ca241c0069cdf661c5fab?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2NzNiYzhjMzE5MGNhMjQxYzAwNjljZGY2NjFjNWZhYiJ9.Z5sLa3C3NTtpuAaBRd0EFLAe0OsNZekAXJ6PKsQa4A4&download=%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%88%B1%EF%BC%88%E6%94%B9%E7%BC%96%EF%BC%89.mp3",
			},
					{
				title: "失恋无罪（改编）",
				artist: "2022-01-23",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdd352b8aaa5f6c81391c02483d46fdda?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZDM1MmI4YWFhNWY2YzgxMzkxYzAyNDgzZDQ2ZmRkYSJ9.xfgC9KeQFt1NRkkUNVoVLofiBOqokgAmkiZ6aU9eTeQ&download=%E5%A4%B1%E6%81%8B%E6%97%A0%E7%BD%AA%EF%BC%88%E6%94%B9%E7%BC%96%EF%BC%89.mp3",
			},
					{
				title: "Body shots",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdbc2d7e2c7ff490570ce97d2edb9c20c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkYmMyZDdlMmM3ZmY0OTA1NzBjZTk3ZDJlZGI5YzIwYyJ9.JVqQY6YTfgxPBztBOt79Fhbn_c7utTeOj1q1Zd7ycNI&download=Body%20shots.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbbcbbb23a508decfc07686d66ff6eb87?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiYmNiYmIyM2E1MDhkZWNmYzA3Njg2ZDY2ZmY2ZWI4NyJ9.tEpC_mLWepDXhnbCbftlsl67PuJsy-NHQikSD-oAuyU&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "白鸽",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f79b0369d06f20d3689feb4be9070c15c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3OWIwMzY5ZDA2ZjIwZDM2ODlmZWI0YmU5MDcwYzE1YyJ9.qm8zOYP7t1xgdYcrJaf0bpSlH_xaTJO7eVzqFt8_KJY&download=%E7%99%BD%E9%B8%BD.mp3",
			},
					{
				title: "掉了",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f50174d248b19ee7681ba1eb013df2231?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MDE3NGQyNDhiMTllZTc2ODFiYTFlYjAxM2RmMjIzMSJ9.mYA39ULfTVa8JMDGCJjo2jFuq4pK64L1H-QVzKq_Jfw&download=%E6%8E%89%E4%BA%86.mp3",
			},
					{
				title: "哪里都是你",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1f856444abfbbdf2c485cc71bc63dff2?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxZjg1NjQ0NGFiZmJiZGYyYzQ4NWNjNzFiYzYzZGZmMiJ9.Db7TEjyEp7vtItxdlOfMJxQCtuUR3M_MCDAYojjet9c&download=%E5%93%AA%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0.mp3",
			},
					{
				title: "你到底有没有爱过我DJ版",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f25b244c981f3a1a88b5b1c120eb2909b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyNWIyNDRjOTgxZjNhMWE4OGI1YjFjMTIwZWIyOTA5YiJ9.x2q0B4LZCHeyk76bvT2Fey-iaCTV06yGFloGqovWFLQ&download=%E4%BD%A0%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E8%BF%87%E6%88%91DJ%E7%89%88.mp3",
			},
					{
				title: "苏幕遮",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ffb432080c3cffe19eed6c831f51c02d7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmYjQzMjA4MGMzY2ZmZTE5ZWVkNmM4MzFmNTFjMDJkNyJ9._Qyvms3DttZ5ZhOqwxbTAEk8gDqfk45RrJxtv4Owyd8&download=%E8%8B%8F%E5%B9%95%E9%81%AE.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f85c43b3e128daa4d2e1e694cf65fd64c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4NWM0M2IzZTEyOGRhYTRkMmUxZTY5NGNmNjVmZDY0YyJ9.xNsuDiZcDSzYhAMa33BVL9KDWI8WiyLnPh8vSdd0A8U&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "鸦雀无声",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7c9cccb5bd46894020020310da55b018?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YzljY2NiNWJkNDY4OTQwMjAwMjAzMTBkYTU1YjAxOCJ9.a79DThMhBSm4evrmpqmsQRJO1GlQqYg-ctQQbj2HRwc&download=%E9%B8%A6%E9%9B%80%E6%97%A0%E5%A3%B0.mp3",
			},
					{
				title: "易燃易爆炸",
				artist: "2022-01-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa0652f3ce0934b3babaf9e54fb1a5ab9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMDY1MmYzY2UwOTM0YjNiYWJhZjllNTRmYjFhNWFiOSJ9.C1x-kyDAg-P56ewMWJFHhZciHd1ulS_Ju-sFClIX7K4&download=%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3",
			},
					{
				title: "外婆说",
				artist: "2022-01-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb42395aa27de97ebdc7f752c16eb190d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiNDIzOTVhYTI3ZGU5N2ViZGM3Zjc1MmMxNmViMTkwZCJ9.sqMrty_D3jxfOomVT2RI6hZw42cc8tCc0AvWWtq9pMU&download=%E5%A4%96%E5%A9%86%E8%AF%B4.mp3",
			},
					{
				title: "黑夜问白天",
				artist: "2022-01-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7a9a7b848a52485265286c6b5c46725a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YTlhN2I4NDhhNTI0ODUyNjUyODZjNmI1YzQ2NzI1YSJ9.KDEBbmnJOHCN-GO8wXMkavwSu4LS8YeQ7xHIXBPgF94&download=%E9%BB%91%E5%A4%9C%E9%97%AE%E7%99%BD%E5%A4%A9.mp3",
			},
					{
				title: "不舍",
				artist: "2022-01-18 复播",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f9333db2920b7578a1160fa25f29ba580?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5MzMzZGIyOTIwYjc1NzhhMTE2MGZhMjVmMjliYTU4MCJ9.SNPEnkmtPhnN1ZGUzGkR0gZlIGZlBcF8iXvCi6d_LzU&download=%E4%B8%8D%E8%88%8D.mp3",
			},
					{
				title: "房间",
				artist: "2022-01-18 复播",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f641412d0c69082c517b41bf878bdbb10?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2NDE0MTJkMGM2OTA4MmM1MTdiNDFiZjg3OGJkYmIxMCJ9.VcZbvo8TvlCdzuKnsfY4RZo_6odiG24wItSs2h-wbQQ&download=%E6%88%BF%E9%97%B4.mp3",
			},
					{
				title: "叹",
				artist: "2022-01-18 复播",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f70bdb91c34da416b6269686490e77758?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3MGJkYjkxYzM0ZGE0MTZiNjI2OTY4NjQ5MGU3Nzc1OCJ9.R8FZDI-sC3AJOEG4MafnwDwUY5Kk0Rlo9ixOCtJAe7I&download=%E5%8F%B9.mp3",
			},
					{
				title: "勿忘心安",
				artist: "2022-01-18 复播",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fd620526b6346bc3a0f06f1cc81db0229?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTQ5OSwiaWF0IjoxNjUwNzk2Njk5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkNjIwNTI2YjYzNDZiYzNhMGYwNmYxY2M4MWRiMDIyOSJ9.9gwqoUT78Ue3idoQyZNxYkYjFqGKdQL9A0yjZs0XZns&download=%E5%8B%BF%E5%BF%98%E5%BF%83%E5%AE%89.mp3",
			},
					{
				title: "祝你生日快乐（滑笛版）",
				artist: "2021-11-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f54fe214068fd852d5175771a0764ec56?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1NGZlMjE0MDY4ZmQ4NTJkNTE3NTc3MWEwNzY0ZWM1NiJ9.80c8szbtFNfxBAS-p-6sXlZkoOKlJRqL0-Z2XLrE2Lc&download=%E7%A5%9D%E4%BD%A0%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%EF%BC%88%E6%BB%91%E7%AC%9B%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2021-11-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f55d6749f09e2d24508dbb3ed84bb1602?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1NWQ2NzQ5ZjA5ZTJkMjQ1MDhkYmIzZWQ4NGJiMTYwMiJ9.IZFJJ1KRdHY43_eyPw2EbZXn5wyTOWFdNpZy_EZ50Y4&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "暧昧+滑笛",
				artist: "2021-11-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f27e69aa8dbb1b84e771d49898d004052?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyN2U2OWFhOGRiYjFiODRlNzcxZDQ5ODk4ZDAwNDA1MiJ9.EjSPyFaU2HdW_jD3eNocmaUGwFl5oIqgrx_DDywvi4U&download=%E6%9A%A7%E6%98%A7%2B%E6%BB%91%E7%AC%9B.mp3",
			},
					{
				title: "花海",
				artist: "2021-11-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2bbf6a68e8bcd85f612a50b28b73cb38?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyYmJmNmE2OGU4YmNkODVmNjEyYTUwYjI4YjczY2IzOCJ9.40zVoo_Bd7mUjvdB0tI21BmrZjDa4CC-c7lDxLm5K94&download=%E8%8A%B1%E6%B5%B7.mp3",
			},
					{
				title: "Call Me Maybe中文版",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f05b3882c5d6e2c68877fc65c4175b37b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwNWIzODgyYzVkNmUyYzY4ODc3ZmM2NWM0MTc1YjM3YiJ9.Z1F2tpo-LWJqWeV_dnVVulwph22ql3HkE1Ys8A6CRQk&download=Call%20Me%20Maybe%E4%B8%AD%E6%96%87%E7%89%88.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7378e7eca3398a08c55e236c24829ef1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3Mzc4ZTdlY2EzMzk4YTA4YzU1ZTIzNmMyNDgyOWVmMSJ9.opXKRdXgdC0geNkwameTWDc7LP2QPzvqp84vn5ck_LQ&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "Body Shots",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f518f02546773653eab0a9a37d3d0f672?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MThmMDI1NDY3NzM2NTNlYWIwYTlhMzdkM2QwZjY3MiJ9.JtITT2Vy-89I_zES7WIJD3u-ugpVgRXv6U5uKUCI-7Q&download=Body%20Shots.mp3",
			},
					{
				title: "嘉宾",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fd81a14a291b69f1c9315e083b14029e4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkODFhMTRhMjkxYjY5ZjFjOTMxNWUwODNiMTQwMjllNCJ9.o7ta7YC8TiPYNx3mI4TyIoLazeJL30EDPuE0a7LP7Ms&download=%E5%98%89%E5%AE%BE.mp3",
			},
					{
				title: "善变",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302febf92d599b54d53e9e61e389a5928eb7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlYmY5MmQ1OTliNTRkNTNlOWU2MWUzODlhNTkyOGViNyJ9.5PNmf88eOkBQbE2Z5f8ckOi9aDZPlwNoh0fNooKIQTY&download=%E5%96%84%E5%8F%98.mp3",
			},
					{
				title: "沙漠骆驼（片段）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3c51a57202f253651a65eafd942da672?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzYzUxYTU3MjAyZjI1MzY1MWE2NWVhZmQ5NDJkYTY3MiJ9.k4A5pOK0syYUQyMuPonMLAhgnU9q3UtumipbJ2vGquk&download=%E6%B2%99%E6%BC%A0%E9%AA%86%E9%A9%BC%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "舞女泪（主播泪）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe8b8e6f066387ee5535cf48d9e1d4491?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlOGI4ZTZmMDY2Mzg3ZWU1NTM1Y2Y0OGQ5ZTFkNDQ5MSJ9.QwS3KsCgNhGBG5UOwlIN0hF5Fx30HLbpJNV5J0uxx_8&download=%E8%88%9E%E5%A5%B3%E6%B3%AA%EF%BC%88%E4%B8%BB%E6%92%AD%E6%B3%AA%EF%BC%89.mp3",
			},
					{
				title: "男孩",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4c2f45ef011952d35ebdab732f7e819f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0YzJmNDVlZjAxMTk1MmQzNWViZGFiNzMyZjdlODE5ZiJ9.hInLCVzqNcQJNueHGiB8lvayj0GPCakb63OZxSR3GSU&download=%E7%94%B7%E5%AD%A9.mp3",
			},
					{
				title: "想你的夜（片段）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa32f742b25745ffa1fc3147aeccbed92?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMzJmNzQyYjI1NzQ1ZmZhMWZjMzE0N2FlY2NiZWQ5MiJ9.3Hj_W2YEl7gTV2xZnuVxY_p35PBKKdsgGiOhhgoGgGs&download=%E6%83%B3%E4%BD%A0%E7%9A%84%E5%A4%9C%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "MC来了（保丽龙）",
				artist: "2021-11-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f605e0b656b9f457ec0bbcd296e3e0e67?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTM4MywiaWF0IjoxNjUwNzk2NTgzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MDVlMGI2NTZiOWY0NTdlYzBiYmNkMjk2ZTNlMGU2NyJ9.9Mmwmul-msRtLN4ThrbCxcsAyUR2PP4m3OcYJ5SwBM4&download=MC%E6%9D%A5%E4%BA%86%EF%BC%88%E4%BF%9D%E4%B8%BD%E9%BE%99%EF%BC%89.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa10df0a81a41d17e4a936be599903709?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMTBkZjBhODFhNDFkMTdlNGE5MzZiZTU5OTkwMzcwOSJ9.tBCqeFOjK4BxjnSQok7nxLZDM6vy7eoJ_07_a9ig98g&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "无人之岛",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8b3be3836fdd08110564e99a698a0986?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4YjNiZTM4MzZmZGQwODExMDU2NGU5OWE2OThhMDk4NiJ9.EoXlxoZABDyiqGBaJq6eooAsUXCgaJ-q7c2c0z0qBD4&download=%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",
			},
					{
				title: "恋爱画板",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f97a194c65981aa32296440c266b07c2b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5N2ExOTRjNjU5ODFhYTMyMjk2NDQwYzI2NmIwN2MyYiJ9.rOHI9qKrU3ZC0cwnRMICv9DPke9KBr-0_TzfW-aKRE8&download=%E6%81%8B%E7%88%B1%E7%94%BB%E6%9D%BF.mp3",
			},
					{
				title: "童话镇",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc063241ba341c717694091327ce476af?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjMDYzMjQxYmEzNDFjNzE3Njk0MDkxMzI3Y2U0NzZhZiJ9._jF65paKh-wnzlXik4bCvMXsWva-kL2mcbRteD0OtFM&download=%E7%AB%A5%E8%AF%9D%E9%95%87.mp3",
			},
					{
				title: "微微",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3d5f7ad030a3ff4a6c3180a4db4527e0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzZDVmN2FkMDMwYTNmZjRhNmMzMTgwYTRkYjQ1MjdlMCJ9.aqbXU26GZ6vWkhWZvaZ4UKixgX7XId-98ZQRI5rgt70&download=%E5%BE%AE%E5%BE%AE.mp3",
			},
					{
				title: "不舍",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0130dee6258320d585210f2bfba0398f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMTMwZGVlNjI1ODMyMGQ1ODUyMTBmMmJmYmEwMzk4ZiJ9.SGRHhlDyls8rNeG9YgppCKO1WndMeb8uVpt_Wi0sngk&download=%E4%B8%8D%E8%88%8D.mp3",
			},
					{
				title: "云与海",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa0e9facfe3960b1ee6581fbf2abff03d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMGU5ZmFjZmUzOTYwYjFlZTY1ODFmYmYyYWJmZjAzZCJ9.737952cgoY-WzL6R_IpJpEJOs4fzeKq7KRUt0PW2PJw&download=%E4%BA%91%E4%B8%8E%E6%B5%B7.mp3",
			},
					{
				title: "房间",
				artist: "2021-10-31 千钻成就",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff0ea9767b74db7448097b5677f0832ad?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmMGVhOTc2N2I3NGRiNzQ0ODA5N2I1Njc3ZjA4MzJhZCJ9.l7zkeaS4giO2SM4YqZ04QJb5U4ZX67v147BEGkDTse0&download=%E6%88%BF%E9%97%B4.mp3",
			},
					{
				title: "朋友的酒（醉酒版）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f38ba422b697c9d9486ca95b04e3b218c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzOGJhNDIyYjY5N2M5ZDk0ODZjYTk1YjA0ZTNiMjE4YyJ9.b89xROojd5s8DwtKbp3aZCAbPExTTMI1hJShNF0X81I&download=%E6%9C%8B%E5%8F%8B%E7%9A%84%E9%85%92%EF%BC%88%E9%86%89%E9%85%92%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "嘉宾（醉酒版）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2bd4dfcde5de4e1feb274a1eb59bbc16?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyYmQ0ZGZjZGU1ZGU0ZTFmZWIyNzRhMWViNTliYmMxNiJ9.6ofeixAyaab9YhNwTkKvgtWLkKFGnHgTKr2KaJCZ0nU&download=%E5%98%89%E5%AE%BE%EF%BC%88%E9%86%89%E9%85%92%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "画沙",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1bda3a299710c7bd6659843d3db2d59e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxYmRhM2EyOTk3MTBjN2JkNjY1OTg0M2QzZGIyZDU5ZSJ9.EkgA_eDsWWr4tTBIx7xIH-tYBeHUgcqJXMWA1fshoMk&download=%E7%94%BB%E6%B2%99.mp3",
			},
					{
				title: "Body Shots",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f501ad0889a0334a2c2ec2b5766d3c6f8?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MDFhZDA4ODlhMDMzNGEyYzJlYzJiNTc2NmQzYzZmOCJ9.gVi-gPZKlu_WtFn6cqzW6dNjEVz3MJh4aSSwjblR9K8&download=Body%20Shots.mp3",
			},
					{
				title: "Volar",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f495cb0c7c86c7613da91508719e237bd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0OTVjYjBjN2M4NmM3NjEzZGE5MTUwODcxOWUyMzdiZCJ9.eBKEgd_AJBMenoIiga-LmgHO91H1ObHG9UFGb0WiZ_U&download=Volar.mp3",
			},
					{
				title: "易燃易爆炸",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe4d479c7e7bf549bfcf7f1df61838039?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlNGQ0NzljN2U3YmY1NDliZmNmN2YxZGY2MTgzODAzOSJ9.9YfQkw-jH23tysEwdr2oeE9mD_sXAT9Ks65Qf1CtLhk&download=%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3",
			},
					{
				title: "囍",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0e5764f82ca6192af89831b3b89ee246?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwZTU3NjRmODJjYTYxOTJhZjg5ODMxYjNiODllZTI0NiJ9.sbpNZtj7gS_9gl_WOhbqIKdasIxLeLerZGGvXcPRtOE&download=%E5%9B%8D.mp3",
			},
					{
				title: "掉了",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa118e1c657766b0f1d49f6f9559f4daf?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMTE4ZTFjNjU3NzY2YjBmMWQ0OWY2Zjk1NTlmNGRhZiJ9.9ra8RPie9gxvbnRSXextIwXYr2vPWyd_FcfwWY-TCRo&download=%E6%8E%89%E4%BA%86.mp3",
			},
					{
				title: "雪人（甩葱版）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc8b2d03193278bd7d0fde2c9d3e353ba?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjOGIyZDAzMTkzMjc4YmQ3ZDBmZGUyYzlkM2UzNTNiYSJ9.7WttWKu8jXGNN73SUGcEuQYz_Optv-xLIJFc23aebKw&download=%E9%9B%AA%E4%BA%BA%EF%BC%88%E7%94%A9%E8%91%B1%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "感恩的心（片段）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f98fe7466d68f804162fca8774cc27766?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5OGZlNzQ2NmQ2OGY4MDQxNjJmY2E4Nzc0Y2MyNzc2NiJ9.pPwNjnsAVCBezCQ7WJ-RV3WZWswlJxXgYPCYPOn77lc&download=%E6%84%9F%E6%81%A9%E7%9A%84%E5%BF%83%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "让我们荡起双桨（片段）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0a88cd8703ae0583e94fa4fa0c9ffcf1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwYTg4Y2Q4NzAzYWUwNTgzZTk0ZmE0ZmEwYzlmZmNmMSJ9.78vb5_3AO04zjoguZNoKwOml_7Y1GPYFovuDBBg3zhs&download=%E8%AE%A9%E6%88%91%E4%BB%AC%E8%8D%A1%E8%B5%B7%E5%8F%8C%E6%A1%A8%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "如愿",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ffaf1bc6536999f7d539d5460cc5400de?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmYWYxYmM2NTM2OTk5ZjdkNTM5ZDU0NjBjYzU0MDBkZSJ9.t-EsL9RPk9npTcviisMUaxgRMXzZf4yPSX6_kW3UAOk&download=%E5%A6%82%E6%84%BF.mp3",
			},
					{
				title: "我妈已经三天没有打我啦",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcefd7781377e22b10e1631561df5998c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjZWZkNzc4MTM3N2UyMmIxMGUxNjMxNTYxZGY1OTk4YyJ9.BsFu7Z7J3aOY1QIg63Olkv9hSxRLeZKdv6xlIuh9BXA&download=%E6%88%91%E5%A6%88%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E6%9C%89%E6%89%93%E6%88%91%E5%95%A6.mp3",
			},
					{
				title: "牛奶颂（片段）",
				artist: "2021-10-30 闺蜜结婚",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdbe5a8bb107be9f1dfde69487a154eb0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkYmU1YThiYjEwN2JlOWYxZGZkZTY5NDg3YTE1NGViMCJ9.XUj5xxVDNB21fkHYGSMI1a5bz1pQLt_hSq0jRmI56Xw&download=%E7%89%9B%E5%A5%B6%E9%A2%82%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "非你莫属",
				artist: "2021-10-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f86d864dfa865bdc7132d74ab6e93577c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4NmQ4NjRkZmE4NjViZGM3MTMyZDc0YWI2ZTkzNTc3YyJ9.wXLFVWsrCwElVGv4IXxVSFjnHCIieTW3GbOt7OUb728&download=%E9%9D%9E%E4%BD%A0%E8%8E%AB%E5%B1%9E.mp3",
			},
					{
				title: "山楂树之恋",
				artist: "2021-10-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3b65caef78756c22910e695fdcbf3d71?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzYjY1Y2FlZjc4NzU2YzIyOTEwZTY5NWZkY2JmM2Q3MSJ9.CCH8gXy2-xVpgVH09i3aoL3m3j7vEsAbdVM7SdPvnl8&download=%E5%B1%B1%E6%A5%82%E6%A0%91%E4%B9%8B%E6%81%8B.mp3",
			},
					{
				title: "溯",
				artist: "2021-10-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1cf802b980c8da9ff35fe9ed948e4a17?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxY2Y4MDJiOTgwYzhkYTlmZjM1ZmU5ZWQ5NDhlNGExNyJ9.yjloZDXiFpgm8HqstqadgwH3lX72mhR4ZXQxJU8hRIY&download=%E6%BA%AF.mp3",
			},
					{
				title: "宝贝",
				artist: "2021-10-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fecaa1eb40c323a8940c47cbf901d4a86?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlY2FhMWViNDBjMzIzYTg5NDBjNDdjYmY5MDFkNGE4NiJ9.z0sDQZX88qHLwe7_riR3u-nL-LI2Xwh7Q30bYW45T5M&download=%E5%AE%9D%E8%B4%9D.mp3",
			},
					{
				title: "空心",
				artist: "2021-10-22",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f28980231bfae79c0e8480a6e7bbfed9c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyODk4MDIzMWJmYWU3OWMwZTg0ODBhNmU3YmJmZWQ5YyJ9.8laVHRv1va9bnR5AUuDYq6VVq0ukH6bCZN982PQ9FkU&download=%E7%A9%BA%E5%BF%83.mp3",
			},
					{
				title: "骄傲的少年（片段）",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5f271ed765176a6da60d8568e7c4bc82?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1ZjI3MWVkNzY1MTc2YTZkYTYwZDg1NjhlN2M0YmM4MiJ9.N5FPnDI8VwpZdOJ2V6uQJZY5co3w5GaowUx5ilbAS4A&download=%E9%AA%84%E5%82%B2%E7%9A%84%E5%B0%91%E5%B9%B4%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "你把我灌醉",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6d2efa5042fd8732728587b018909c94?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2ZDJlZmE1MDQyZmQ4NzMyNzI4NTg3YjAxODkwOWM5NCJ9.sJNlA1EN8bKl8EpoqFi6FqsYUgFK7ZfGxb71TPexdGg&download=%E4%BD%A0%E6%8A%8A%E6%88%91%E7%81%8C%E9%86%89.mp3",
			},
					{
				title: "如果有来生",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb1b66fd7fa697416299398e226fcb722?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiMWI2NmZkN2ZhNjk3NDE2Mjk5Mzk4ZTIyNmZjYjcyMiJ9.wrNaLXD5k0cLPWEhzHC33KYOqHWOQ-7oCgsnt8iIoYY&download=%E5%A6%82%E6%9E%9C%E6%9C%89%E6%9D%A5%E7%94%9F.mp3",
			},
					{
				title: "小情歌",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1673fe287b678bf072590990d74fca8b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxNjczZmUyODdiNjc4YmYwNzI1OTA5OTBkNzRmY2E4YiJ9.q72SW0q4zC1eAAYtaE0P7zIrooU1L8gRMH7FWeELDSk&download=%E5%B0%8F%E6%83%85%E6%AD%8C.mp3",
			},
					{
				title: "我只有我",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0d881d2031ff47b0b209557550e42cc5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwZDg4MWQyMDMxZmY0N2IwYjIwOTU1NzU1MGU0MmNjNSJ9.znDUnyQ6xY2JpbiWfDXFMYR02iCF6DkZMC-TqAAZDyc&download=%E6%88%91%E5%8F%AA%E6%9C%89%E6%88%91.mp3",
			},
					{
				title: "咎由自取",
				artist: "2021-10-17",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fac9fa178add2b62f5670b7bc5b415f89?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYzlmYTE3OGFkZDJiNjJmNTY3MGI3YmM1YjQxNWY4OSJ9.wchrzyfKGZ5pfedsGgkAI_08f1hrJiol24stSqEGkVY&download=%E5%92%8E%E7%94%B1%E8%87%AA%E5%8F%96.mp3",
			},
					{
				title: "左边（片段）",
				artist: "2021-10-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f23bdea1ccbf87d6e377c723ccf1cb92b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyM2JkZWExY2NiZjg3ZDZlMzc3YzcyM2NjZjFjYjkyYiJ9.DoYmUxbS3zCRuhT8oPIEg7rWVPcNusAcVXh1UToMD7k&download=%E5%B7%A6%E8%BE%B9%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "疑心病",
				artist: "2021-10-15",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5678ef682c09c1ed20553aaf80a41e15?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1Njc4ZWY2ODJjMDljMWVkMjA1NTNhYWY4MGE0MWUxNSJ9.VOP6IFmro1X3V9p204AQZb_e47RqxYuZk3qTRJjwlLI&download=%E7%96%91%E5%BF%83%E7%97%85.mp3",
			},
					{
				title: "How You Like That（嗨歌）",
				artist: "2021-10-08",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbf5807bdf1d9f3276b2576e68adb8172?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiZjU4MDdiZGYxZDlmMzI3NmIyNTc2ZTY4YWRiODE3MiJ9.kAfKiKieZV97RXO0vOhXWns9_5TppdXNMfmMyMhgNgk&download=How%20You%20Like%20That%EF%BC%88%E5%97%A8%E6%AD%8C%EF%BC%89.mp3",
			},
					{
				title: "犯错（道歉版）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0c817418929567e91f43061edcc363dd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwYzgxNzQxODkyOTU2N2U5MWY0MzA2MWVkY2MzNjNkZCJ9.F3A49TJU5gMKyOWdQeKQnzRcoNCUTfFKxaQzSKHpyS8&download=%E7%8A%AF%E9%94%99%EF%BC%88%E9%81%93%E6%AD%89%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "Volar",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa440381fc94ba01590e7dc4222f6a75c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhNDQwMzgxZmM5NGJhMDE1OTBlN2RjNDIyMmY2YTc1YyJ9.O31UoDgzIshRWhfZhJxosk2pr5E-ij9r_Xikn7BZTgc&download=Volar.mp3",
			},
					{
				title: "FunRun",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fab6b8bdb0cb21d576211682e1d10b986?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYjZiOGJkYjBjYjIxZDU3NjIxMTY4MmUxZDEwYjk4NiJ9.JNXhgPhlOa5mpgizpWTOca6yzf-KvlNWWsTHLEnftr8&download=FunRun.mp3",
			},
					{
				title: "苏幕遮（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc4a8e10b40dffbc1c7c4da954be17977?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjNGE4ZTEwYjQwZGZmYmMxYzdjNGRhOTU0YmUxNzk3NyJ9.q86fjPei1WmYI91iMeN7CIGlvCkL6UcdDPxkstQ23sI&download=%E8%8B%8F%E5%B9%95%E9%81%AE%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "心墙",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbf7a5cafd1a40e5917c0c42e272b5799?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiZjdhNWNhZmQxYTQwZTU5MTdjMGM0MmUyNzJiNTc5OSJ9.DFKNU730IWx9bsupVyLS_73DvKW69BgIHEsNkKppZbc&download=%E5%BF%83%E5%A2%99.mp3",
			},
					{
				title: "告白气球（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f60cac46182b7d6a805edae95e2e74c04?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MGNhYzQ2MTgyYjdkNmE4MDVlZGFlOTVlMmU3NGMwNCJ9.i2I_RWBuLhp3PKifI1LBle3yf4-8EU47ebCg0Vgopq4&download=%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Toxic（片段）",
				artist: "2021-10-05",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4d2457fe76e505fecdb4df4989fcc8f3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0ZDI0NTdmZTc2ZTUwNWZlY2RiNGRmNDk4OWZjYzhmMyJ9.GGcgMAMbij1zYmuBxmrnam3bYER4rtZVwS2UClLqG2U&download=Toxic%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "朋友的酒",
				artist: "2021-10-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdec9b58d164ef35daf5f232e51ea4662?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZWM5YjU4ZDE2NGVmMzVkYWY1ZjIzMmU1MWVhNDY2MiJ9.zrd0bsDMNm_Yx7czTWdPFiuTsAZmtPWgHLXflqAICBM&download=%E6%9C%8B%E5%8F%8B%E7%9A%84%E9%85%92.mp3",
			},
					{
				title: "小可爱与小领带",
				artist: "2021-10-03",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f878d9d965c77d9fb53b0e3d5cb80f25a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4NzhkOWQ5NjVjNzdkOWZiNTNiMGUzZDVjYjgwZjI1YSJ9.LbQpCoAVmJhLoIp3U3WsyPsHpc3Tlq0u48bnYsfj8uo&download=%E5%B0%8F%E5%8F%AF%E7%88%B1%E4%B8%8E%E5%B0%8F%E9%A2%86%E5%B8%A6.mp3",
			},
					{
				title: "奇妙的约会（道歉版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb31e82e5626aeafb9eb86d9a86b686fb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiMzFlODJlNTYyNmFlYWZiOWViODZkOWE4NmI2ODZmYiJ9.fhPNbYDrfb26nv-csjdW65yfTKAKe88tDZBHhSnwVDo&download=%E5%A5%87%E5%A6%99%E7%9A%84%E7%BA%A6%E4%BC%9A%EF%BC%88%E9%81%93%E6%AD%89%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "小幸运（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302facb26158f250bb2643b900052d78072d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhY2IyNjE1OGYyNTBiYjI2NDNiOTAwMDUyZDc4MDcyZCJ9.-X6Nh-IKl1rvxnlUaU8JbN26FUAh7IvYOxk6Gms8Yh4&download=%E5%B0%8F%E5%B9%B8%E8%BF%90%EF%BC%88%E9%99%B6%E7%AC%9B%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "小蜜蜂（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fecb989c66ee8d0e8d926c39f4a8540e7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlY2I5ODljNjZlZThkMGU4ZDkyNmMzOWY0YTg1NDBlNyJ9.hhpijKdAQM-kvu6WUg8k2XVOjzuZemb25L1mJZKQ0to&download=%E5%B0%8F%E8%9C%9C%E8%9C%82%EF%BC%88%E9%99%B6%E7%AC%9B%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "天空之城（陶笛版）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f357950a33defe395668ce225f083905f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNTc5NTBhMzNkZWZlMzk1NjY4Y2UyMjVmMDgzOTA1ZiJ9.QuHLSGCKLCx5fmwRgT5EpAbc57N7Py99iXgzFzsug3Q&download=%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E%EF%BC%88%E9%99%B6%E7%AC%9B%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "陶笛+小幸运（片段）",
				artist: "2021-10-01",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f15569c04957c8afae48ea7ac34a1d543?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMTIzMiwiaWF0IjoxNjUwNzk2NDMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxNTU2OWMwNDk1N2M4YWZhZTQ4ZWE3YWMzNGExZDU0MyJ9.HWAWAF7MDtD0Xcv--2MNleByMe5uqUt3AukcmZyHU6E&download=%E9%99%B6%E7%AC%9B%2B%E5%B0%8F%E5%B9%B8%E8%BF%90%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "吹梦到西洲",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f0d3d4ad811f697eb4d06c03b7146a980?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwZDNkNGFkODExZjY5N2ViNGQwNmMwM2I3MTQ2YTk4MCJ9.Gh6wXhEGrfil7fgUiljYZsbcbxxCtHi-_oGCZN1VYxY&download=%E5%90%B9%E6%A2%A6%E5%88%B0%E8%A5%BF%E6%B4%B2.mp3",
			},
					{
				title: "生僻字（烫嘴版）",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f48db54fa6adbb7179d5852fa8660ef52?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0OGRiNTRmYTZhZGJiNzE3OWQ1ODUyZmE4NjYwZWY1MiJ9.TyVUAavRvP2HlCESzexmkZB8O3qyHVhJMek0JIIHD6I&download=%E7%94%9F%E5%83%BB%E5%AD%97%EF%BC%88%E7%83%AB%E5%98%B4%E7%89%88%EF%BC%89.mp3",
			},
					{
				title: "念思之王",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f564b1fbb1c73b27833bb166a0ce9832b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1NjRiMWZiYjFjNzNiMjc4MzNiYjE2NmEwY2U5ODMyYiJ9.K1UWusZJ9styxXxmHcqa3-d9u4p0r2dCs6UljD42CWQ&download=%E5%BF%B5%E6%80%9D%E4%B9%8B%E7%8E%8B.mp3",
			},
					{
				title: "小鸡哔哔",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdf5c421a08c1da99eb7f1362e4105689?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZjVjNDIxYTA4YzFkYTk5ZWI3ZjEzNjJlNDEwNTY4OSJ9._1AXLOQgz_YVeP-sww3a0E2Zi-JKj8ydOip5i-8W4go&download=%E5%B0%8F%E9%B8%A1%E5%93%94%E5%93%94.mp3",
			},
					{
				title: "处处吻",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f24866c3ffdb282159ec3939a3fa02b75?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyNDg2NmMzZmZkYjI4MjE1OWVjMzkzOWEzZmEwMmI3NSJ9.r7lrU8fnT9ozlQYAo0zVxYu8dTxclOnbgN3V9JnktXg&download=%E5%A4%84%E5%A4%84%E5%90%BB.mp3",
			},
					{
				title: "大田后生仔（片段）",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3705f83e6be02afd53709e1e1c13769e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNzA1ZjgzZTZiZTAyYWZkNTM3MDllMWUxYzEzNzY5ZSJ9.nwy9OXrediuajaglhk7IrZzTySU9Ce_tNqMFY5tigwE&download=%E5%A4%A7%E7%94%B0%E5%90%8E%E7%94%9F%E4%BB%94%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "17岁（片段）",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcc68c737892581f9030c2698d6d3bb1b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYzY4YzczNzg5MjU4MWY5MDMwYzI2OThkNmQzYmIxYiJ9.T0EgcABq9xMe0Ix2Zi-9KspH9P-a8TozkPpiG_oEKYQ&download=17%E5%B2%81%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "爱拼才会赢",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7b91b1dbf9517dbd4a8307795e9c91d7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3YjkxYjFkYmY5NTE3ZGJkNGE4MzA3Nzk1ZTljOTFkNyJ9.qhEY21xtdIr3Dl_ayK5QVmKNUlcXQBGRppC4_J5Egeg&download=%E7%88%B1%E6%8B%BC%E6%89%8D%E4%BC%9A%E8%B5%A2.mp3",
			},
					{
				title: "我妈已经三天没打我啦",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff5b71fb2867b8ac2b5fcff65079f852f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmNWI3MWZiMjg2N2I4YWMyYjVmY2ZmNjUwNzlmODUyZiJ9.zRbXw1FP-yZIlC8QM_JPVi8KnsjZX_HVKv1ozR2HivA&download=%E6%88%91%E5%A6%88%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E6%89%93%E6%88%91%E5%95%A6.mp3",
			},
					{
				title: "千千阙歌",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fd07c819506fb1b125952e961f9fee514?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkMDdjODE5NTA2ZmIxYjEyNTk1MmU5NjFmOWZlZTUxNCJ9.TpL42UqTj-_y_Aef7Bz41opowwJTsNdctAxd6IEQM-c&download=%E5%8D%83%E5%8D%83%E9%98%99%E6%AD%8C.mp3",
			},
					{
				title: "万物生（片段）",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fd58f61b6cfa8bf44f94587f7327344e5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkNThmNjFiNmNmYThiZjQ0Zjk0NTg3ZjczMjczNDRlNSJ9.WIprX7-V-xF6jegWUt3JS49h-cN6j-A7DZKDzhQ1Etw&download=%E4%B8%87%E7%89%A9%E7%94%9F%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Dinosaur恐龙",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdb0b5d4879cd97af5e1094badbc6b008?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkYjBiNWQ0ODc5Y2Q5N2FmNWUxMDk0YmFkYmM2YjAwOCJ9.ljFGxE9XAVgoykpkRs5qjH8NKReJFuQxl808ZsdQz6g&download=Dinosaur%E6%81%90%E9%BE%99.mp3",
			},
					{
				title: "1,2,3,4",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1a064a0222accfbe4123c2e7791ea6c7?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxYTA2NGEwMjIyYWNjZmJlNDEyM2MyZTc3OTFlYTZjNyJ9.TmpTn4sPaJT0sbRVFPf1C7u2aVHcPmN5QuejlQnDL0o&download=1%2C2%2C3%2C4.mp3",
			},
					{
				title: "失眠飞行",
				artist: "2021-09-29 自信方言",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f94dc2e101cd026603617584abdfdd188?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5NGRjMmUxMDFjZDAyNjYwMzYxNzU4NGFiZGZkZDE4OCJ9.NIcCFxv0uMk006p3fwUuDSUCiRp1baFHw1pzkuPp67w&download=%E5%A4%B1%E7%9C%A0%E9%A3%9E%E8%A1%8C.mp3",
			},
					{
				title: "勇气",
				artist: "2021-09-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f02c7a2393d57ea19a00b44f2172310a5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMmM3YTIzOTNkNTdlYTE5YTAwYjQ0ZjIxNzIzMTBhNSJ9.0IfclFMpGfjp9YWqcQmSShUq2Kv0rFMBVVwvUW6MR0s&download=%E5%8B%87%E6%B0%94.mp3",
			},
					{
				title: "小宇",
				artist: "2021-09-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe1b8f03a96bcb053219cb858e60b7e19?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlMWI4ZjAzYTk2YmNiMDUzMjE5Y2I4NThlNjBiN2UxOSJ9.Vqh3Nr6IXNqU0nBNDO6PmbQ_mmoNgKlLRtE9RFUEmsc&download=%E5%B0%8F%E5%AE%87.mp3",
			},
					{
				title: "梁山伯与茱丽叶",
				artist: "2021-09-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6c9c4db8aea824e7caf8c96b8e35d498?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2YzljNGRiOGFlYTgyNGU3Y2FmOGM5NmI4ZTM1ZDQ5OCJ9.p7sW2y5A7XBlyyUMd9KIQPE0QiPHo45MWF1lPdxELS4&download=%E6%A2%81%E5%B1%B1%E4%BC%AF%E4%B8%8E%E8%8C%B1%E4%B8%BD%E5%8F%B6.mp3",
			},
					{
				title: "阿拉斯加海湾",
				artist: "2021-09-27",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f7251408999e34358df79a895cfe29525?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3MjUxNDA4OTk5ZTM0MzU4ZGY3OWE4OTVjZmUyOTUyNSJ9.5zLugJarwKZZgeL7PbAQ95sDDnvJQQVGU330snGhfrc&download=%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
			},
					{
				title: "飘向北方（Mr丶团）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f43eb19a159cb26e97beb409a0bb456bd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0M2ViMTlhMTU5Y2IyNmU5N2JlYjQwOWEwYmI0NTZiZCJ9.Tq79rx5ALgbneLmkON1kbyYAJ3p5iZq2GZ4GB98_VgM&download=%E9%A3%98%E5%90%91%E5%8C%97%E6%96%B9%EF%BC%88Mr%E4%B8%B6%E5%9B%A2%EF%BC%89.mp3",
			},
					{
				title: "断水流",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff0903fc4b9f58972974b1dddcb1e2e02?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmMDkwM2ZjNGI5ZjU4OTcyOTc0YjFkZGRjYjFlMmUwMiJ9.FctDLvxsa1lZUbYhK2zS61R55IiL-U0exEHMOmDjhmE&download=%E6%96%AD%E6%B0%B4%E6%B5%81.mp3",
			},
					{
				title: "唇唇欲动",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3546f96c93fd8175739742268725f63d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzNTQ2Zjk2YzkzZmQ4MTc1NzM5NzQyMjY4NzI1ZjYzZCJ9.ELa9gXAIeYoFXhUBSlpGEUe7LShqi-0ZEyiCIRPO7Og&download=%E5%94%87%E5%94%87%E6%AC%B2%E5%8A%A8.mp3",
			},
					{
				title: "Love Love Love（片段）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302ff7a9848b1be906687aea3c0081a6e715?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZmN2E5ODQ4YjFiZTkwNjY4N2FlYTNjMDA4MWE2ZTcxNSJ9.CZgc8Qlr6kPanqAQxzvQAU8XBlwFkjOHi66e2-I98nk&download=Love%20Love%20Love%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "杀破狼",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4b51db36b971fb5c799652098702a985?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0YjUxZGIzNmI5NzFmYjVjNzk5NjUyMDk4NzAyYTk4NSJ9.jrRQ0uImGnPdnIl6gQkk_gLhp-xLSmPYRqcUi7L6bmA&download=%E6%9D%80%E7%A0%B4%E7%8B%BC.mp3",
			},
					{
				title: "舍不得",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f197e60b38aa62c63d074285958cf6f0e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxOTdlNjBiMzhhYTYyYzYzZDA3NDI4NTk1OGNmNmYwZSJ9.Mjjz8WAcdXB11OXcBZ-QDrSF0vutAc-IuAOXMDfrNl0&download=%E8%88%8D%E4%B8%8D%E5%BE%97.mp3",
			},
					{
				title: "扇子舞",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f3d16a7b621aa5a659fedddec4955a049?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYzZDE2YTdiNjIxYWE1YTY1OWZlZGRkZWM0OTU1YTA0OSJ9.VfaJD_kKzh7G5bi8jkkP5K7zXZx3rv-STUzbdGxk_9U&download=%E6%89%87%E5%AD%90%E8%88%9E.mp3",
			},
					{
				title: "痒",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa047e1657934a5d80521854a0b5a1dff?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhMDQ3ZTE2NTc5MzRhNWQ4MDUyMTg1NGEwYjVhMWRmZiJ9.Mqgi0heh5W2RJLMVfUU_A3D06yciSBPGWk68be9OxDY&download=%E7%97%92.mp3",
			},
					{
				title: "啊77（片段）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f61355b5115b67d003e0e49cd0854d9c0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MTM1NWI1MTE1YjY3ZDAwM2UwZTQ5Y2QwODU0ZDljMCJ9.xeNEO6-KBQaowWYmPJ8ksYmd5JVSd6ZIHtxphrRG21A&download=%E5%95%8A77%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "要抱抱（片段）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fcf02abafcaa2d97622a8db73e70643ce?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjZjAyYWJhZmNhYTJkOTc2MjJhOGRiNzNlNzA2NDNjZSJ9.ev17Q6G2C9iELuc-yASmgUs4s2jLx7oLbfI2nAR40mo&download=%E8%A6%81%E6%8A%B1%E6%8A%B1%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "火（片段）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f040d19a2f3f5304ccd99f2cde4cd16d6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwNDBkMTlhMmYzZjUzMDRjY2Q5OWYyY2RlNGNkMTZkNiJ9.e8-tCCq6tF5m-aRVC0w9TGPshbHg3_YqRk19odTpZs0&download=%E7%81%AB%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "曾经你说（片段）",
				artist: "2021-09-25",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f827a123b3f3a1dce91f15f8961dd4822?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4MjdhMTIzYjNmM2ExZGNlOTFmMTVmODk2MWRkNDgyMiJ9.wE0x4P9iC7XyGaQ_QtKGCV5Ime6lzvoIIng1MXq-gkA&download=%E6%9B%BE%E7%BB%8F%E4%BD%A0%E8%AF%B4%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "明明就",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb39fbcc8565716084435a36b13ae8303?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiMzlmYmNjODU2NTcxNjA4NDQzNWEzNmIxM2FlODMwMyJ9.tHPXdaxgv6IEByOVd9n9toP4QOCvjQZdKSWtESjaCDA&download=%E6%98%8E%E6%98%8E%E5%B0%B1.mp3",
			},
					{
				title: "掉了",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f70b1faaa1290b96a13475c04b8fb050b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3MGIxZmFhYTEyOTBiOTZhMTM0NzVjMDRiOGZiMDUwYiJ9.T0_xhiQtWPO21Z11ilxA_WSBJysjB9WW-lp9VACYqxA&download=%E6%8E%89%E4%BA%86.mp3",
			},
					{
				title: "不舍",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fab7c8b0ca1601af460cc989243653ce6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYjdjOGIwY2ExNjAxYWY0NjBjYzk4OTI0MzY1M2NlNiJ9.VdoA4PsMrWa17ItjltR3CT46c2InweevB__4T6E_xBU&download=%E4%B8%8D%E8%88%8D.mp3",
			},
					{
				title: "白鸽",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302feca3e0f6c8dc3264598ba47fe9e263a4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlY2EzZTBmNmM4ZGMzMjY0NTk4YmE0N2ZlOWUyNjNhNCJ9.Qb2fenR9ryQzQAKmUhTms1uXSuGTIv8PjVLIYU4m3ts&download=%E7%99%BD%E9%B8%BD.mp3",
			},
					{
				title: "九张机",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5d2ad584de7e11c95bec25c352bc8fef?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1ZDJhZDU4NGRlN2UxMWM5NWJlYzI1YzM1MmJjOGZlZiJ9.MMQ38DYbt0Iud6DIrWchdZtz1NXtPvU1h9YXdFmJhP4&download=%E4%B9%9D%E5%BC%A0%E6%9C%BA.mp3",
			},
					{
				title: "溯",
				artist: "2021-09-24",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fa80a9d2de95c5da60b0dcd1c5c21e0ed?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhODBhOWQyZGU5NWM1ZGE2MGIwZGNkMWM1YzIxZTBlZCJ9.EaUuYVWdcj9mRLQk57zmwMAoAi3IEPwPuXu5YflwTHA&download=%E6%BA%AF.mp3",
			},
					{
				title: "午夜DJ",
				artist: "2021-09-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f90f14be793252ffa07dd710932505317?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY5MGYxNGJlNzkzMjUyZmZhMDdkZDcxMDkzMjUwNTMxNyJ9.G7UPlo8UgGgOUqb0a1LVS5P85Y7qmE8ib0PHwmGHpaE&download=%E5%8D%88%E5%A4%9CDJ.mp3",
			},
					{
				title: "爱，存在",
				artist: "2021-09-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f843598474acc7ce855f25fd15ff248b3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4NDM1OTg0NzRhY2M3Y2U4NTVmMjVmZDE1ZmYyNDhiMyJ9.oQo7BCFdDrqvBI4lfAidy96a544pSDG6SaVhLbUvUDw&download=%E7%88%B1%EF%BC%8C%E5%AD%98%E5%9C%A8.mp3",
			},
					{
				title: "三寸天堂",
				artist: "2021-09-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f49374b326a6e4b874e6eb9663cfe33c0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0OTM3NGIzMjZhNmU0Yjg3NGU2ZWI5NjYzY2ZlMzNjMCJ9.thlvldT2il_gz-EtMTK1mmf9J176XCP6P-FJCI1sxTw&download=%E4%B8%89%E5%AF%B8%E5%A4%A9%E5%A0%82.mp3",
			},
					{
				title: "下雨天（片段）",
				artist: "2021-09-20",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdf54537a48da23ec1fbbe8ed1b7f6ceb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZjU0NTM3YTQ4ZGEyM2VjMWZiYmU4ZWQxYjdmNmNlYiJ9.aqgRxG4suvOldKrbPVKwzolyJzm7aJV58LbppY-qcek&download=%E4%B8%8B%E9%9B%A8%E5%A4%A9%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "123木头人",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f00b70950b4ad789320622575f51c43cd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwMGI3MDk1MGI0YWQ3ODkzMjA2MjI1NzVmNTFjNDNjZCJ9.3owL7pSnyDgaDQKE-X6qCVJGCO7Vt0sXnncOEiCRFQY&download=123%E6%9C%A8%E5%A4%B4%E4%BA%BA.mp3",
			},
					{
				title: "遗失的美好",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302febe83a3dae7d01bb71c593c0a6d75e0e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlYmU4M2EzZGFlN2QwMWJiNzFjNTkzYzBhNmQ3NWUwZSJ9.lLBVMLa9xr3-q_hdefnDm1cnZ6AdAyxbHSSb_BO8sXc&download=%E9%81%97%E5%A4%B1%E7%9A%84%E7%BE%8E%E5%A5%BD.mp3",
			},
					{
				title: "错位时空",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f4ec822d06a4315e84197400b03707c67?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0ZWM4MjJkMDZhNDMxNWU4NDE5NzQwMGIwMzcwN2M2NyJ9.i66c_dAsJCkwfOSzNeq5f70haLtTSj38L4W4JM1Kdh8&download=%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.mp3",
			},
					{
				title: "不舍",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6215d49ea52b9973300b91f8d99968a8?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MjE1ZDQ5ZWE1MmI5OTczMzAwYjkxZjhkOTk5NjhhOCJ9.jLjpED4GOr-A6ik2EntVFGdPxnqgdBCSZiaALrH2b1A&download=%E4%B8%8D%E8%88%8D.mp3",
			},
					{
				title: "牵丝戏",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f2bb0dbdab11a94f273b03149a51ffbfd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYyYmIwZGJkYWIxMWE5NGYyNzNiMDMxNDlhNTFmZmJmZCJ9.Uci6U-qbZpKta6axadrP4YNr-_ATuepXkYfnyxRypqI&download=%E7%89%B5%E4%B8%9D%E6%88%8F.mp3",
			},
					{
				title: "赤伶",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f13cf098ace252d4656834871bf9ad22d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxM2NmMDk4YWNlMjUyZDQ2NTY4MzQ4NzFiZjlhZDIyZCJ9.8sTvRELarwispqTUCA-7lKQnrfo5dsAgk4TT9Sf-TEc&download=%E8%B5%A4%E4%BC%B6.mp3",
			},
					{
				title: "Volar",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5b1e44fb366a0a81ebb3a3a64a97cb21?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1YjFlNDRmYjM2NmEwYTgxZWJiM2EzYTY0YTk3Y2IyMSJ9.8b93smWT2YPoN9ZZ5ZfplIztTzkkd2GQRi3a39byuiw&download=Volar.mp3",
			},
					{
				title: "流着泪说分手",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbf31122dd66b0ddd6d076678c5e39e0a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiZjMxMTIyZGQ2NmIwZGRkNmQwNzY2NzhjNWUzOWUwYSJ9.lK82a5iDmiLWp8FCHFQdvkgukgXaI1_O404ekOG3l94&download=%E6%B5%81%E7%9D%80%E6%B3%AA%E8%AF%B4%E5%88%86%E6%89%8B.mp3",
			},
					{
				title: "身骑白马",
				artist: "2021-09-19",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fb6c58e4c71b9ec33b23c777064175fd1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTQwMDY3OCwiaWF0IjoxNjUwNzk1ODc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiNmM1OGU0YzcxYjllYzMzYjIzYzc3NzA2NDE3NWZkMSJ9.d4o70GleCawjv7eCpgEfuLTD6IYTVPSieTns1h7ZyN4&download=%E8%BA%AB%E9%AA%91%E7%99%BD%E9%A9%AC.mp3",
			},
					{
				title: "思恋是一种病（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdc4738ea85c7204bd8fa9634be99589b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkYzQ3MzhlYTg1YzcyMDRiZDhmYTk2MzRiZTk5NTg5YiJ9.4aAESOrRUINuFw16TXdWHPaYq9E8C0teQNXYWjWiwtM&download=%E6%80%9D%E6%81%8B%E6%98%AF%E4%B8%80%E7%A7%8D%E7%97%85%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "爱我别走",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f697d3b44acf7d26d32d75869aa7846ae?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2OTdkM2I0NGFjZjdkMjZkMzJkNzU4NjlhYTc4NDZhZSJ9.jB4NdSUg5rt_CgsUeryLyLY7uDwag1ybMpojYrlURMs&download=%E7%88%B1%E6%88%91%E5%88%AB%E8%B5%B0.mp3",
			},
					{
				title: "别找我麻烦",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f611921255bac2baea49057d43c38f000?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2MTE5MjEyNTViYWMyYmFlYTQ5MDU3ZDQzYzM4ZjAwMCJ9.DzhrtcZYUxeOlbU7_BlvxzABuEeUmrMProhZYRUVg3Q&download=%E5%88%AB%E6%89%BE%E6%88%91%E9%BA%BB%E7%83%A6.mp3",
			},
					{
				title: "咎由自取",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fe4c0940fe73b59715a9e6fc3b1e872e1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZlNGMwOTQwZmU3M2I1OTcxNWE5ZTZmYzNiMWU4NzJlMSJ9.DgLD6lLTxDV7SWrsBVhyPZ58bP79LIqIMj9KoTMV9HE&download=%E5%92%8E%E7%94%B1%E8%87%AA%E5%8F%96.mp3",
			},
					{
				title: "生生世世爱",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc992c3f2188807da09b490050d753c11?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjOTkyYzNmMjE4ODgwN2RhMDliNDkwMDUwZDc1M2MxMSJ9.dvPiqCXjpin0zJLAmvYn07T_12QQPQ1OJgjL0R1cvNo&download=%E7%94%9F%E7%94%9F%E4%B8%96%E4%B8%96%E7%88%B1.mp3",
			},
					{
				title: "唇唇欲动",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302faabb35d866ea2aed10a20053ff61e8f1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZhYWJiMzVkODY2ZWEyYWVkMTBhMjAwNTNmZjYxZThmMSJ9.olMlkxT4pvYA2X-zhyxm8x_zMqAhbJgC1Lctcnc4z2E&download=%E5%94%87%E5%94%87%E6%AC%B2%E5%8A%A8.mp3",
			},
					{
				title: "Body Shots",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f5502b4f9fc4a81253eb5fdb2650857dd?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1NTAyYjRmOWZjNGE4MTI1M2ViNWZkYjI2NTA4NTdkZCJ9.SCIGnDgztjOGR2T5H_IQhHPQPGUMMyDMqQc5b2_njlE&download=Body%20Shots.mp3",
			},
					{
				title: "Tik Tok",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fbcd3d64caad9907e915a624b52687071?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZiY2QzZDY0Y2FhZDk5MDdlOTE1YTYyNGI1MjY4NzA3MSJ9.CcQ-32ibzA3YQTPC-TAZRHiMHcMglo7iTcB0cTPaYBw&download=Tik%20Tok.mp3",
			},
					{
				title: "易燃易爆炸",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f43437d301c7cdf1aab5c4a5f3283de12?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY0MzQzN2QzMDFjN2NkZjFhYWI1YzRhNWYzMjgzZGUxMiJ9.vhYHkfAWlOlDc85AVrCJTwY7-344WixtU3Qy7r0QWEA&download=%E6%98%93%E7%87%83%E6%98%93%E7%88%86%E7%82%B8.mp3",
			},
					{
				title: "1,2,3,4",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f10ba00c062447fec5cbab57dce021745?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxMGJhMDBjMDYyNDQ3ZmVjNWNiYWI1N2RjZTAyMTc0NSJ9.L1-Xeo-KLd3op3RgWxosnvxd-k2Z_NdnlvB3bF7bo64&download=1%2C2%2C3%2C4.mp3",
			},
					{
				title: "9420（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f72f06e554ba6c5001dbe268c868985fc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY3MmYwNmU1NTRiYTZjNTAwMWRiZTI2OGM4Njg5ODVmYyJ9.nvFNVe-LAqYKkLDbi-p82oFB8Zkd4WV9bgaBiFPyLUY&download=9420%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "我想对你说baby（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f89eb47f4a9c6d713e35c61b9b26f8d65?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4OWViNDdmNGE5YzZkNzEzZTM1YzYxYjliMjZmOGQ2NSJ9.SpbxKnEaM30j42lu4n4IoxC_zRFAxNQGOAcmB0IQ_EU&download=%E6%88%91%E6%83%B3%E5%AF%B9%E4%BD%A0%E8%AF%B4baby%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "你到底有没有爱过我（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f524b96e8250be7b8ca9a954d2d9502de?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY1MjRiOTZlODI1MGJlN2I4Y2E5YTk1NGQyZDk1MDJkZSJ9.S6aExH2jBcEurYnFn2Y1CJhd08omafRAwI_DjEcCznw&download=%E4%BD%A0%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E8%BF%87%E6%88%91%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "耍太极（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fdde52222ef61a4a8cefbe20ed1b2298d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZkZGU1MjIyMmVmNjFhNGE4Y2VmYmUyMGVkMWIyMjk4ZCJ9.A9Xyg7IQL_BOwpYFTQx0jM7WVaqFyFqHDIuiAy2lXI0&download=%E8%80%8D%E5%A4%AA%E6%9E%81%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "Rolling In The Deep（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f1dcfc6d5e84f4d805c7a322b1d57607f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYxZGNmYzZkNWU4NGY0ZDgwNWM3YTMyMmIxZDU3NjA3ZiJ9.eZjsL7M2mpKawU4yKcx9n1Sy0JcU5mRC4Dx0fVQsi3w&download=Rolling%20In%20The%20Deep%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "林中鸟（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fca63be7cf60837a57a5e7d53b9234756?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjYTYzYmU3Y2Y2MDgzN2E1N2E1ZTdkNTNiOTIzNDc1NiJ9.uxwX3fjoKszbFTTvkFX-rmdKDFUKQlDvSZ1GCr3sZFk&download=%E6%9E%97%E4%B8%AD%E9%B8%9F%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "朋友的酒（片段）",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f083d7b6e7a08333483879bbf6342c320?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmYwODNkN2I2ZTdhMDgzMzM0ODM4NzliYmY2MzQyYzMyMCJ9.tJcankhAQEOqp_sKgmFLb1EWulsXwTQ9N7BzZFHixXg&download=%E6%9C%8B%E5%8F%8B%E7%9A%84%E9%85%92%EF%BC%88%E7%89%87%E6%AE%B5%EF%BC%89.mp3",
			},
					{
				title: "夜夜夜夜",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f8c0f53214587d48f4a9414fe19341850?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY4YzBmNTMyMTQ1ODdkNDhmNGE5NDE0ZmUxOTM0MTg1MCJ9.7ZEHewSgcT4Cbjaeu19atBLutVNAuXsjVYa9SFK2Hx0&download=%E5%A4%9C%E5%A4%9C%E5%A4%9C%E5%A4%9C.mp3",
			},
					{
				title: "爱我别走2",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302f6890601f9408b6d2314b800ece434542?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmY2ODkwNjAxZjk0MDhiNmQyMzE0YjgwMGVjZTQzNDU0MiJ9.U2ZqS4gB1A1RdASpuXMgkDexLBp9ofEU-tWdTCdB16U&download=%E7%88%B1%E6%88%91%E5%88%AB%E8%B5%B02.mp3",
			},
					{
				title: "房间",
				artist: "2022-08-30",
				album: " ",
				cover: "img/top.jpg",
				mp3: "https://tcs.teambition.net/storage/302fc60b52506ac72d73fddbb3e6ab8efb8d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MTM5OTA4OCwiaWF0IjoxNjUwNzk0Mjg4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMwMmZjNjBiNTI1MDZhYzcyZDczZmRkYmIzZTZhYjhlZmI4ZCJ9.ZJQi3uheNSkvAH6evtifireMjaTO-fqgpPdIL7s3m3Q&download=%E6%88%BF%E9%97%B4.mp3",
			}
	
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

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

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
		item.cover = '.img/tx1.png' 
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

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});
