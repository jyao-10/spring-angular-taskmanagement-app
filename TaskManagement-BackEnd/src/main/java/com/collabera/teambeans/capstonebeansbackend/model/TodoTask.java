package com.collabera.teambeans.capstonebeansbackend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.collabera.teambeans.capstonebeansbackend.mysql.types.PriorityLevel;
import com.collabera.teambeans.capstonebeansbackend.mysql.types.Status;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@CrossOrigin(origins = "http://localhost:4200")
@Table(name="TodoTask")
public class TodoTask{
	
	@Id
	@Column(name="todo_id")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;

	@NotBlank
	private String description;

	@Enumerated(EnumType.STRING)
	private PriorityLevel priority;

	@Enumerated(EnumType.STRING)
	private Status status;	


	@ManyToOne
	@JoinColumn(name="user_id")
	private UserDetails user;


	@Temporal(TemporalType.DATE)
	private Date dueDate;

	@Temporal(TemporalType.TIME)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
	private Date dueTime;

	/**
	 * Constructs a new To Do task with no information. This is really only here for use by Spring beans.
	 */
	public TodoTask() {
	}

	public TodoTask(Long id, @NotBlank String description, @NotBlank Status status, @NotBlank PriorityLevel priority, @NotNull Date dueDate, @NotNull Date time) {
		super();
		this.id = id;
		this.description = description;
		this.status = status;
		this.priority = priority;
		//this.dueTime = dueTime;
		//this.dueDate = dueDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public PriorityLevel getPriority() {
		return priority;
	}

	public void setPriority(PriorityLevel priority) {
		this.priority = priority;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Date getDueTime() {
		return dueTime;
	}

	public void setDueTime(Date dueTime) {
		this.dueTime = dueTime;
	}

	public UserDetails getUser() {
		return user;
	}

	public void setUser(UserDetails user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "TodoTask [id=" + id + ", description=" + description + ", priority=" + priority + ", status=" + status
				+ ", user=" + user + ", dueDate=" + dueDate + ", dueTime=" + dueTime + "]";
	}
	


}


