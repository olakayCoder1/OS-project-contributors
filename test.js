function getContributors(e){
    const username = e.target.username.value
    const repos = e.target.repos.value
    console.log(username , repos )
    e.preventDefault()
    fetch(`https://api.github.com/repos/Oluwasetemi/altschool-opensource-names/contributors?per_page=100&`)
    .then(res => res.json())
    .then(data => {

        let usersList = document.getElementById('usersList')
        data.forEach((val)=> {
           
            document.getElementById('heading').innerText ='The following users are people that contributed to the project'
            const new_div = document.createElement('div')
            new_div.innerHTML = `
            <div class="flex items-center space-x-4 p-4 hover:bg-gray-700 hover:text-gray-100">
                <div class="flex-shrink-0">
                    <img src="${val['avatar_url']}" class="w-10 h-10 md:w-10 md:h-10 rounded-md" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold  truncate ">
                        ${val['login']}
                    </p>
                    <p class="text-sm  truncate ">
                        ${val['contributions']} commits
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 text-blue-600">
                    <a href="${val['html_url']}"  cla>
                        visit profile
                    </a>
                </div>
            </div>
            
            `
            
            usersList.append(new_div)
        })
    })
}




document.getElementById('form-data').addEventListener('submit', getContributors)