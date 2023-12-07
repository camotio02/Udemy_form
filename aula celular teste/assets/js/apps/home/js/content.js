function contentHome(){
    return`
    <div class="home">
        <div class="timesHome">
          12:00:00
        </div>
        <div class="radius"></div>
        <div class="internet-wifi-bateria">
        <div class="internet">
            <i class='bx bx-signal-5'></i>
        </div>
        <div class="wifi">
            <i class='bx bx-wifi'></i>
            </div>
            <div class="bateria">
        <div class="loadingbactery"></div>
            </div>
            <div class="bateriaPorcentagem">10%</div>
        </div>
        <div class="bottom-apps">
            <div class="app draggable">
                <i class='bx bxs-music'></i>
            </div>
            <div class="app draggable">
                <i class='bx bxl-internet-explorer'></i>
            </div>
            <div class="app draggable">
                <i class='bx bx-message-rounded'></i>
            </div>
            <div class="app draggable">
                <i class='bx bx-phone'></i>
            </div>
        </div>
        
    `
}
export default contentHome()