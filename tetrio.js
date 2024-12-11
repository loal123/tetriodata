
const APILINK = "https://ch.tetr.io/api/users"
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const inputtext = document.getElementById('input-text');

inputtext.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search.click();
    }
});

search.addEventListener('click', () => {
    const username = document.querySelector('.search-box input').value;
    container.style.height = '0px';

    if (username == '') return;
    fetch(`${APILINK}/${username}`)
        .then(response => response.json())
        .then(json => {


            if (json.success = false) {
                console.log("Failed");
                return;
            }
            // let summaries = json.summaries;


            // let league = summaries.leagu

            const about = document.querySelector('.about span');
            about.innerHTML = `${json.data.bio}`




            fetch(`${APILINK}/${username}/summaries/league`)
                .then(response2 => response2.json())
                .then(json2 => {
                    const tr = document.querySelector('.TR span');
                    const rank = document.querySelector('.global span');

                    tr.innerHTML = `${json2.data.tr}`;
                    rank.innerHTML = `${json2.data.standing}`;
                    console.log(json2.data.tr);
                })



            container.style.height = '600px';
        })


})