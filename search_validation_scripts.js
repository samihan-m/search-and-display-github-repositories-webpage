searchPageURL = "results_display.php?github_account_name="

/**
Calling GitHub API to see if there is an account under this name.
If there is, then redirect to the results page.
If not, display an error message.
*/
function check_name(account_name) {
  var validName = false;

  var url = "https://api.github.com/users/" + account_name + "/repos";
  async function getRepoJson() {
    const repoResponse = await fetch(url);
    const repoJson = await repoResponse.json();
    return repoJson;
  }

  getRepoJson().then(repoJson => {
    console.log(repoJson);
    if(repoJson.message == "Not Found") {
      validName = false;
    }
    else {
      validName = true;
    }

    update_page();
  });

  function update_page() {
    if(validName) {
      window.location.replace(searchPageURL + account_name);
    }
    else {
      document.getElementById("nameError").innerText = "There is no account with that name. Enter something else."
    }
  }
}
