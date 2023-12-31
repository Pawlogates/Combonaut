extends Node2D


@onready var shot_main = $Area2D
@onready var charged_shot_buffer = $Timer

@onready var projectile_basic_quick = $"."

@onready var shot_anim = $AnimationPlayer
@onready var charged_shot = $Area2D/charged_shot
@onready var audio_stream_player_2d = $AudioStreamPlayer2D


var projectile_shot = false
var charged = false

var started = false

const FOLLOW_SPEED = 0.4
var mouse_pos

var rng = RandomNumberGenerator.new()
var x


func _ready():
	set_name.call_deferred("projectile_basic_quick")


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(_delta):
	
	if Input.is_action_just_released("attack_fast") and not charged and not started:
		Events.shot.emit()
		charged_shot_buffer.stop()
		x = rng.randf_range(0, 2)
		audio_stream_player_2d.set_pitch_scale(x)
		audio_stream_player_2d.play()
		
		charged_shot.visible = false
		
		if Input.is_action_pressed("move_DOWN") and projectile_shot == false:
			shot_anim.play("shot_animDOWN")
			projectile_basic_quick.visible = true
			projectile_shot = true

		elif Globals.direction == -1 and projectile_shot == false:
				shot_anim.play("shot_animL")
				projectile_basic_quick.visible = true
				projectile_shot = true
	
		elif Globals.direction == 1 and projectile_shot == false:
				shot_anim.play("shot_animR")
				projectile_basic_quick.visible = true
				projectile_shot = true
				
				
			
			
	elif charged == true and Input.is_action_just_released("attack_fast") and charged and not started and not projectile_shot and Input.is_action_pressed("move_DOWN"):
		started = true
		charged_shot.visible = false
		audio_stream_player_2d.play()
		projectile_basic_quick.visible = true
		shot_anim.play("shot_anim_CHARGED_DOWN")
		Events.shot.emit()
		charged_shot_buffer.stop()
	
	elif charged == true and Input.is_action_just_released("attack_fast") and charged and not started and not projectile_shot and Globals.direction == 1:
		started = true
		charged_shot.visible = false
		audio_stream_player_2d.play()
		projectile_basic_quick.visible = true
		shot_anim.play("shot_anim_CHARGED_R")
		Events.shot.emit()
		charged_shot_buffer.stop()
		
	elif charged == true and Input.is_action_just_released("attack_fast") and charged and not started and not projectile_shot and Globals.direction == -1:
		started = true
		charged_shot.visible = false
		audio_stream_player_2d.play()
		projectile_basic_quick.visible = true
		shot_anim.play("shot_anim_CHARGED_L")
		Events.shot.emit()
		charged_shot_buffer.stop()
		
		
	
	#elif started and not projectile_shot:

		#mouse_pos = get_local_mouse_position()
		#projectile_basic_quick.position = projectile_basic_quick.position.lerp(mouse_pos, delta * FOLLOW_SPEED)
		#print(mouse_pos)
	
	
	
	else:
		pass
	
	
func _on_timer_timeout():
	charged = true
	Events.shot_charged.emit()
	


func _on_animation_player_animation_finished(_shot_anim):
	queue_free()
