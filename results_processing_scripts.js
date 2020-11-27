/*
This script fetches a list of repositories from GitHub
and writes it to a div on the page.
*/
function refreshRepos() {
  var url = "https://api.github.com/users/" + account_name + "/repos";
  var repoList = document.getElementById("repoList");
  async function getRepoJson() {
    const repoResponse = await fetch(url);
    const repoJson = await repoResponse.json();
    return repoJson;
  }

  repoList.innerText = "";
  var hideButton = document.createElement("button");
  hideButton.innerText = "Hide The Project List"
  hideButton.onclick = function() {resetRepoList()};
  repoList.appendChild(hideButton);

  getRepoJson().then(repoJson => {
    var repoDisplay = document.createElement("div");
    repoDisplay.classList.add("verticalFlex");
    var repoCount = repoJson.length;
    var panelRowCount = Math.ceil(repoCount/2);

    function createPanel(repo) {
      var panel = document.createElement("div");
      panel.id = repoJson[i].name+ "-display";
      panel.classList.add("repoDisplayPanel");
      var repoLink = document.createElement("a");
      repoLink.classList.add("button");
      repoLink.href = repo.svn_url;
      repoLink.innerText = repo.name;
      panel.appendChild(repoLink);
      var repoDescription = document.createElement("p");
      repoDescription.innerText = repo.description;
      panel.appendChild(repoDescription);
      return panel;
    }

    var reposDisplayed = 0;
    for(var i = 0; i < panelRowCount; i++) {
      var panelRow = document.createElement("div");
      panelRow.classList.add("repoDisplayPanelRow");
      var panelsToAdd = 1;
      if((repoCount - reposDisplayed)%2 != 1) {
        //this means that there are at least 2 repos to add,
        //so fill the row with 2 panels
        panelsToAdd = 2;
      }
      for(var k = 0; k < panelsToAdd; k++, reposDisplayed++) {
        var repo = repoJson[reposDisplayed];
        var panel = createPanel(repo);
        panelRow.appendChild(panel);
      }
      repoList.appendChild(panelRow);
    }
  });
    /* the old version that just listed everything
    for(repo of repoJson) {
      var repoDisplay = document.createElement("p");
      repoDisplay.classList.add("smallFont");
      repoDisplay.id = repo.name + "-display";
      var repoLink = document.createElement("a");
      repoLink.href = repo.svn_url;
      repoLink.innerText = repo.name;
      repoDisplay.appendChild(repoLink);
      var repoDescription = document.createElement("p");
      repoDescription.innerText = repo.description;
      repoDisplay.appendChild(repoDescription);
      repoList.appendChild(repoDisplay);
    }
  });
  */
}

function resetRepoList() {
  var repoList = document.getElementById("repoList");
  var showButton = document.createElement("button");
  showButton.innerText = "me";
  showButton.onclick = function() {refreshRepos()};
  repoList.innerText = "Want to see a list of their projects right here? Click ";
  repoList.appendChild(showButton);
}

/*Things To do on load*/
/*
this just calls the reset function so i don't have to write the button
on the page and in the js
*/
window.onload = function() {resetRepoList()};
