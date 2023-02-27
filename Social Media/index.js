//sidebar
	const menuItems =document.querySelectorAll(".menu-items");
	
	//remove active class from all menuItems
		const changeActiveItems =() =>
			{
				menuItems.forEach(item =>
				{
					item.classList.remove("active");
				})
			}
	//add active class from all menuItems	
		menuItems.forEach(item =>
				{
					item.addEventListener("click",() =>
						{
							changeActiveItems();
							item.classList.add("active");
							// show the popup
								if (item.id != "notification") 
									{
										document.querySelector(".notification-popup").style.display="none";
									}
								else
									{
										document.querySelector(".notification-popup").style.display="block";
											//remove the notificationcount
												document.querySelector("#notification .notification-count").style.display="none";
									}
						} )
				})
//messages
	const messagenotification =document.querySelector("#messages-notification");
	const messagebox =document.querySelector(".messages");
	const message=document.querySelectorAll(".message");
	const messageSearch=document.querySelector("#message-search");

	//search chats
		const searchMessage = () => {
				const val = messageSearch.value.toLowerCase();
				console.log(val);
				message.forEach(user => {
					let name =user.querySelector('h5').textContent.toLowerCase();
					if (name.indexOf(val) != -1) 
						{
							user.style.display="flex";
						}
					else
						{
							user.style.display="none";
						}
				})
			}
		//search chat
			messageSearch.addEventListener("keyup",searchMessage);

	//hilight the messages card when messages menu item clicked
		messagenotification.addEventListener("click",()=>
				{
					messagebox.style.boxShadow='0 0 1rem var(--color-primary)';
					//remove the notificationcount
						messagenotification.querySelector(".notification-count").style.display="none";
					setTimeout(() =>
						{
							messagebox.style.boxShadow='none';
						},2000);
				})
//custimize-theme
	const theme=document.querySelector("#theme");
	const themeModel=document.querySelector(".custimize-theme");
	//open Them Model 
	const openThemModel = () =>
		{
			themeModel.style.display="grid";
		}
	//close Them Model
	const closeThemModel = (e) =>
		{
			if(e.target.classList.contains("custimize-theme"))
				{
					themeModel.style.display="none";
				}	
		} 
	themeModel.addEventListener("click",closeThemModel);
	theme.addEventListener("click",openThemModel);

	//remove active class from span font size
		const removeSizeSelector =()=>
			{
				fontSizes.forEach(size => 
					{
						size.classList.remove("active");
					})
			}

	//font size
		const fontSizes =document.querySelectorAll(".choose-size span");
		var root=document.querySelector(":root");
		
		fontSizes.forEach(size => {
			size.addEventListener("click",() =>	{
				removeSizeSelector();
				let fontSize;
				size.classList.toggle("active");

				if(size.classList.contains("font-size-1"))
					{
						fontSize="10px";
						root.style.setProperty('----sticky-top-left','5.4rem');
						root.style.setProperty('----sticky-top-right','5.4rem');
					}
			else if (size.classList.contains("font-size-2"))
				{
					fontSize="13px";
					root.style.setProperty('----sticky-top-left','5.4rem');
					root.style.setProperty('----sticky-top-right','-rem');
				}
			else if (size.classList.contains("font-size-3"))
				{
					fontSize="16px";
					root.style.setProperty('----sticky-top-left','-2rem');
					root.style.setProperty('----sticky-top-right','-17rem');
				}
			else if (size.classList.contains("font-size-4"))
				{
					fontSize="19px";
					root.style.setProperty('----sticky-top-left','-5rem');
					root.style.setProperty('----sticky-top-right','-25rem');
				}
			else if (size.classList.contains("font-size-5"))
				{
					fontSize="22px";
					root.style.setProperty('----sticky-top-left','-10rem');
					root.style.setProperty('----sticky-top-right','-33rem');
				}
				//change the font size
				document.querySelector("html").style.fontSize=fontSize;
				})		
		})
	//primary color
		const colorPalette =document.querySelectorAll(".choose-color span");
		//remove active class from span primary color
		const removePrimarySelector =()=>
			{
				colorPalette.forEach(color => 
					{
						color.classList.remove("active");
					})
			}
		colorPalette.forEach(color =>
			{
				color.addEventListener("click",()=>
					{
						let primary;
						removePrimarySelector();
						if (color.classList.contains("color-1")) 
							{
								primaryHue=252;
							}
						else if(color.classList.contains("color-2"))
							{
								primaryHue=52;
							}
						else if(color.classList.contains("color-3"))
							{
								primaryHue=352;
							}
						else if(color.classList.contains("color-4"))
							{
								primaryHue=152;
							}
						else if(color.classList.contains("color-5"))
							{
								primaryHue=202;
							}
						color.classList.add("active");
						root.style.setProperty("--primary-color-hue",primaryHue);
					})
			})
	//background color
		const Bg1=document.querySelector(".bg-1");
		const Bg2=document.querySelector(".bg-2");
		const Bg3=document.querySelector(".bg-3");

		let darkColorLightness;
		let	lightColorLightness;
		let	whiteColorLightness; 

		const changeBg=()=>
			{
				root.style.setProperty("--dark-color-lightness", darkColorLightness);
				root.style.setProperty("--light-color-lightness", lightColorLightness);
				root.style.setProperty("--white-color-lightness", whiteColorLightness);
			}
		Bg1.addEventListener("click",()=>
				{
					darkColorLightness = "95%";
					whiteColorLightness = "20%";
					lightColorLightness = "15%";
					//add active class
						Bg1.classList.add("active");
					//remove active class
						Bg2.classList.remove("active");
						Bg3.classList.remove("active");
						changeBg();
					//remove custimize from localstorage
						window.location.reload();
				})
		Bg2.addEventListener("click",()=>
				{
					darkColorLightness = "95%";
					whiteColorLightness = "20%";
					lightColorLightness = "15%";
					//add active class
						Bg2.classList.add("active");
					//remove active class
						Bg1.classList.remove("active");
						Bg3.classList.remove("active");
						changeBg();
				})
		Bg3.addEventListener("click",()=>
				{
					darkColorLightness = "95%";
					whiteColorLightness = "10%";
					lightColorLightness = "0%";
					//add active class
						Bg3.classList.add("active");
					//remove active class
						Bg1.classList.remove("active");
						Bg2.classList.remove("active");
						changeBg();
				})
	let userDom =document.querySelector("#user");
	let UserName = localStorage.getItem('userName');
if(UserName)
	{
		//console.log("yes");
		links.remove();
		userInfo.style.display="flex";
		userDom.innerHTML= UserName;
	}
logoutBtn.addEventListener("click",function()
		{
			localStorage.clear();
			setTimeout(()=>
			{
				window.location="register.html";
			},1500)
		});

