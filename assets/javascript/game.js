
$(document).ready(function() {

	var hero_image = new Array();
	hero_image[0] = new Image();
	hero_image[0].src = 'assets/images/link.png';
	hero_image[0].id = 'image';

	hero_image[1] = new Image();
	hero_image[1].src = 'assets/images/bongo.png';
	hero_image[1].id = 'image';

	hero_image[2] = new Image();
	hero_image[2].src = 'assets/images/gandondorf.jpg';
	hero_image[2].id = 'image';

	hero_image[3] = new Image();
	hero_image[3].src = 'assets/images/queen.png';
	hero_image[3].id = 'image';

  var young_hero = ["Link", "Bongo Bongo", "Gandondorf", "Queen Gohma"];
  var health = [100, 70, 120, 50];
  var attack_power = [];
  var counter_power = [];

  console.log(hero_image[0]);

  function it_is_over_9000(){

    for (var i = 0; i < young_hero.length; i++) {

      var x = Math.floor(Math.random(attack_power)*20) + 3;
      var y = Math.floor(Math.random(attack_power)*10) + 3;

      attack_power.push(x);
      counter_power.push(y);
    }
  }

  function ready_board(){

    it_is_over_9000();

    for (var i = 0; i < young_hero.length; i++) {
      var hero_btns = $("<button>");
      hero_btns.addClass("hero hero_button");
      hero_btns.attr({
        "data-name": young_hero[i],
        "data-health": health[i],
        "data-image": hero_image[i],
        "data-attack": attack_power[i],
        "data-counter": counter_power[i],
        "data-index": i
      });


      hero_btns.text(young_hero[i]);
      hero_btns.append(hero_image[i]);
      hero_btns.append(health[i]);

      $("#buttons").append(hero_btns);
    }
  }

  function char(){

    $(".hero_button").on("click", function() {
      var hero_select = $(this).data('index');
   

      for (var i = 0; i < young_hero.length; i++) {

        //var attack = ;
      
        if (i != hero_select){

          var enemies = $("<button>");
          enemies.addClass("hero enemy");
          
          enemies.attr({
            "data-power" : it_is_over_9000(),
            "data-name": young_hero[i],
            "data-health": health[i],
            "data-image": hero_image[i],
            "data-attack": attack_power[i],
            "data-counter": counter_power[i],
            "data-index": i
          });

          enemies.text(young_hero[i]);
          enemies.append(hero_image[i]);
          enemies.append(health[i]);

          $("#battle").append(enemies);
        }
      }
    
      $("#buttons").html($(this).data('name','health','image'));

      defender();
    });
  }

  function defender(){

    $(".enemy").on("click", function() {

      var enemy_select = $(this).data("index");

      console.log(enemy_select);

      for (var i = 0; i < young_hero.length; i++) {
      
        if (i == enemy_select) {

          var defender = $("<button>");
          defender.addClass("hero defender");
          
          defender.attr({
            "data-name": young_hero[i],
            "data-health": health[i],
            "data-image": hero_image[i],
            "data-attack": attack_power[i],
            "data-counter": counter_power[i],
            "data-index": i
          });

          defender.text(young_hero[i]);
          defender.append(hero_image[i]);
          defender.append(health[i]);

          $("#defend").append(defender);

          $(this).remove();
        }
      }

    });
  }


  $(".defend_button").on("click" , function(){

    var k = (parseInt($('.defender').data('health')) - parseInt($('.hero_button').data('attack')));
    console.log(
      $('.defender').data('health'), '<--- Updated data value \n', 
      parseInt($('.defender').attr('data-health')), '<--- Non updated attribute'
      );
    $(".defender").data('health', k);

    if($(".defender").data("health") == 0){
      $(".defender").remove();
    } else {

    }
  });
  


  
  ready_board();
  char();
});







