function info(pkt, infrom){

    var punkt = document.getElementById(pkt);
    var information = document.getElementById(infrom);

punkt.addEventListener('mouseenter',function (){
    information.classList.remove('hide');
    information.classList.add('show');
    })

    punkt.addEventListener('mouseleave', function (){
        information.classList.remove( 'show');
        information.classList.add('hide');
    })
}
info( 'cpu', 'cpuinfo');
info( 'ram', 'raminfo');
info( 'pci', 'pciinfo');
info( 'chlodzenie', 'chlodzenieinfo');
info( 'm2', 'm2info');
info( 'chip', 'chipinfo');
info( 'gen2', 'gen2info');
info( 'PCI-I', 'PCI-Iinfo');
info( 'sata', 'satainfo');
info( 'porty', 'portyinfo');