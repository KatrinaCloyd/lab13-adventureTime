# TIME TO MAKE A PLAN

X-SET DATA 
    X-user data (will be generated on form page)
        X-name 
        X-character 
        X-health
        X-food 
        X-num of friends 
        X-obstacles cleared 
    
XXX -obstacles (three of them)
    (rain, lawnmower, racoons, dog)
        -id: name
        -title: page header 
        -map: placement of link on page ?
        -image: main picture for page
        -story: text block for with qustion
        -choices [{ 3 for each obstacle 
            -id: choice name 
            -action: choice to show with radio btn
            -health: what each one does to user health 
            -snacks: what each one does to user food
        }, {}, {}]

Welcome Page 
    HTML 
  !     Style Header and Over all Page look
        X-Form for getting user choices and info 
            X-name 
            X-character 
            X-health -auto
            X-food -auto
            X-obstacles cleared -auto
        X-submit button 
    XJS 
        X-Get Stats from LS function 
        X-Set Stats from LS function
        X-Gather info from submit button
            X-create USER and save to LS 
            X-redirect to Map Page 

Map page 
    HTML   
  !     Over all Page look
        X Copy Style and Page feel from welcome 
        X Style Header from User Info
        X-Welcome and base story 
        X-Main Map Image 
        X-links to the 3 obstacles 
  !     -only enable one at a time 
  !     -check off completed as they are done 

    JS 
        X-get USER data from LS 
  !     -redirect to results if 
            -health is <= 0
            -all obstacles are complete 
        X-render user info to Header
        X-render links to obstacles on page from data 
  !     -completed tasks should look different
  !     -completed tasks should be disabled 

OBSTACLE page
    HTML 
    X Copy Style and Page feel from welcome 
        X -Info / Stats in Header 
        X-place holder for: (or just a single div)
            X-header 
            X-image
            X-story blaok 
            X-choices
            X-submit button

    JS 
        X-get USER data from LS 
        X-render to in user info to Header
        X-get selected obstacle from URL
        -render obstacle to page 
            -header 
            -image
            -story black 
            -choices
            -submit button
            -form button listener 
                -up date user stats based on choice
                -set USER back to LS 
                -redirect back to map page 

RESULTS page 
    HTML 
    Copy Style and Page feel from welcome 
        -place holder for results text 
        -reset button 

    JS 
        -render results story 
        -render picture based on your results 
            -all dead
            -you died but your firends are still out there..
            -made it out with some dead friends 
            -all made it out alive! 
        -listener to button 
            -clear LS 
            -redirect to Welcome Page

