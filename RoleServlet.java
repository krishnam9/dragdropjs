package com.rs.clientconnect.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.rs.clientconnect.model.Role;

public class RoleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public RoleServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		List<Role> roles = createRoles();
		System.out.println("roles size:"+roles.size());
		
		String json = new Gson().toJson(roles);
		response.getWriter().write(json);
		
	}


	private List<Role> createRoles() {

		List<Role> roles = new ArrayList<Role>();
		
		Role role1 = new Role(101, "Database Role", "Role for Database");
		Role role2 = new Role(102, "Outlook Role", "Role for Outlook");
		Role role3 = new Role(103, "Browser Role", "Role for Browser");
		
		roles.add(role1);roles.add(role2);roles.add(role3);
		
		return roles;
	}
}
