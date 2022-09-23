import React from 'react';
import './App.css';
  
function App() {
    return (
        <div>
            
            <div class="logo">
                <img src = "https://i.postimg.cc/kGvXMmfd/Logo.png" />
            </div>

            <div class = "navbar">
                <nav class="navbar background">
                    <ul class="nav-list">
                        <li class = "bg"><a href="#home">HOME</a></li>
                        <li class = "bg"><a href="#top">TOP</a></li>
                        <li class = "bg"><a href="#contests">CONTESTS</a></li>
                        <li class = "bg"><a href='#problemset'>PROBLEMSET</a></li>
                        <li class = "bg"><a href='#rating'>RATING</a></li>
                        <li class = "bg"><a href='#help'>HELP</a></li>
                    </ul>
                </nav>
            </div>

            <section class="section">
                <ul>
                <li class = "bd">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            IUT Intra University Girl's Programming Contest
                        </h1>
                        <p class="text-small">
                            Hello good people, we are proud to inform you that IUT is going to arrange a programming contest on 5th October, 2022, will start at 3pm and run for 3 hours.
                            The platofrom will be toph. There will be 7-8 problems and they will be sorted by difficulty. There are exciting prizes for the winners(top 5 performances). Morever, top 3 performances from batch 21 shall be rewarded seperately.
                        </p>
                    </div>
                </div>
                </li>

                <li class = "bd">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Any good resources for DP?
                        </h1>
                        <p class="text-small">
                            Hello everyone, recently I've been struggling a lot with dp type of problems. Do you guys have any good resource with hands on dp examples and a working code? Your help will be much appreciated.
                        </p>
                    </div>
                </div>
                </li>
                <li class = "bd">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Can I do online bridge algorithm in O(n)?
                        </h1>
                        <p class="text-small">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>
                </li>
                <li class = "bd">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            A small collection of cool problems
                        </h1>
                        <p class="text-small">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>
                </div>
                </li>
                </ul>
            </section>
    </div>
    )
}

export default App