<script>
	import Centered from "$lib/components/centered.svelte";
</script>

<div class="container">

	<h1>Getting Started with Postcards</h1>
	<p>
		<strong>Creating an Account</strong>
		<br>
		New Users of Postcards will be greeted with a welcome screen. To create an account, tap "Get Started". Authentication for Postcards is managed by using Sign in with Apple. To continue please tap "Sign in with Apple" and follow the guidance within the popover. Next, enter a username. If the username you entered is available you will see "Username Available" written in green above the "Continue" button. If the username you entered is available you will see "Username Unavailable" written in red above the "Continue" button, which will be disabled until you enter an available username. Once this is complete tap the "Continue" button. The next screen will guide you through the process of selecting a profile photo. Once this is complete, tap the "Continue" button. Finally you will be presented with a screen informing you that the setup procress was compeleted successfully. Tap "Get Started" to start using the Postcards app.
	</p>

	<p>
		<strong>Sharing a Moment</strong>
		<br>
		To share a moment navigate to the new moment tab by selecting it from the tab bar at the bottom of the app's interface. Next tap the icon of the photo to select a photo from your photo library. Next, enter a caption using the field below. Finally, select a group or multiple groups to share this moment with. Once you have completed the steps above, tap "Share to Monthly Postcard" to share your post to the group(s) postcard. Please note the moment will not be visible to the group until the following months postcard.
	</p>

	<p>
		<strong>Managing a Group</strong>
		<br>
		To manage groups plase navigate to the profile tab by selecting it from the tab bar at the bottom of the app's interface. Next, select the "Groups" option from the list of menu items below your profile. To create a group tap the "Create Group" button in the top right corner of the navigation bar, enter a name for your new group in the dialogue, and finally tap "Create" to finish creating a group. To add another member to a group, click the icon of a person with a plus symbol next to the groups name, then search for a user by their username, and once you've found them tap "Invite" to invite them to their group. To join a group first ask a current group member to invite you to a group, then in the groups view find the group under the Invitations section, and finally tap "Join" to join the group.
	</p>

	<p>
		<strong>Viewing Postcards</strong>
		<br>
		To view a postcard navigate to the postcards tab by selecting it from the tab bar at the bottom of the app's interface. Once there you will be presented with a list of your groups. If you do not see any groups, please see the instructions above for creating or joining a group. If you do not see any posts, it means that no one in the group shared any moments last month. If you would like to view past postcards scroll down and tap the "View Previous Month" button. This will load the postcards from the previous month.
	</p>

	<p>
		<strong>Managing your Account</strong>
		<br>
		To manage your account plase navigate to the profile tab by selecting it from the tab bar at the bottom of the app's interface. From there you can manage your account by selecting the ellipsis (three dots). From the menu you can select "Update Username" to envoke a dialogue to change your username, select "Update Profile Picture" to change the photo other users will see when viewing your account, or select "Sign Out" to sign out of your account on the app.
	</p>

</div>

<style>

h1 {
	font-weight: 400;
	font-size: 1.5em;
}

h2 {
	font-weight: 400;
	font-size: 1.25em;
	margin-bottom: 0px;
}

p {
	max-width: 600px;
	font-weight: 300;
}

a {
	cursor: pointer;
	color: grey;
}

a:hover {
	color: black;
}

strong {
	font-weight: 500;
	font-size: 1.1em;
	line-height: 1.75em;
}

.container {
	padding: 0;
	margin: 0;
	margin-top: 10em;
	padding-bottom: 10em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.links-container {
	display: flex;
	flex-direction: column;
	grid-gap: 1em;
	align-items: center;
}
</style>