<script>
	import DefaultHeader from "$lib/components/headers/defaultHeader.svelte";
	import Section from "$lib/components/layout/section.svelte";
    import Expanding from "$lib/components/detail/expandingFAQ.svelte";
</script>

<DefaultHeader title="Frequently Asked Questions"/>

<br>

<Section>
    
    <Expanding title="How do I access the Beta?">
        
        <p>If you haven't already requested to join the beta program, please do so by filling out this form. Once this is complete you will recieve an email from Apple's TestFlight service. This service allows developers to share beta versions of their application with the public to test features prior to a public launch on the App Store. The email will recieve a link to test Postcards as well as instructions on downloading and installing the TestFlight app. These instructions will guide you to first install the TestFlight app. Once complete, please return to the invitation you received in your email. This will include a large blue button that will open the invitation in the TestFlight app that you just installed. Once you've accepted the terms you can view all versions available for testing and notes on what to test.
        </p>

    </Expanding>

    <Expanding title="How Do I Create a Group?">
        
        <p>To manage groups plase navigate to the profile tab by selecting it from the tab bar at the bottom of the app's interface. Next, select the "Groups" option from the list of menu items below your profile. To create a group tap the "Create Group" button in the top right corner of the navigation bar, enter a name for your new group in the dialogue, and finally tap "Create" to finish creating a group. To add another member to a group, click the icon of a person with a plus symbol next to the groups name, then search for a user by their username, and once you've found them tap "Invite" to invite them to their group. To join a group first ask a current group member to invite you to a group, then in the groups view find the group under the Invitations section, and finally tap "Join" to join the group.</p>

    </Expanding>

    <Expanding title="How Do I Share a Moment?">
        
        <p>To share a moment navigate to the new moment tab by selecting it from the tab bar at the bottom of the app's interface. Next tap the icon of the photo to select a photo from your photo library. Next, enter a caption using the field below. Finally, select a group or multiple groups to share this moment with. Once you have completed the steps above, tap "Share to Monthly Postcard" to share your post to the group(s) postcard. Please note the moment will not be visible to the group until the following months postcard.</p>

    </Expanding>

    <Expanding title="Why I am not seeing any Postcards?">
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </Expanding>

    <Expanding title="How do I sign out of my account?">
        
        <p>To manage your account plase navigate to the profile tab by selecting it from the tab bar at the bottom of the app's interface. From there you can manage your account by selecting the ellipsis (three dots). From the menu you can select "Update Username" to envoke a dialogue to change your username, select "Update Profile Picture" to change the photo other users will see when viewing your account, or select "Sign Out" to sign out of your account on the app.</p>

    </Expanding>

</Section>