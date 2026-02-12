package com.decroly.narutoworldbackend.controller;

import com.decroly.narutoworldbackend.model.LoginRequest;
import com.decroly.narutoworldbackend.model.LoginResponse;
import com.decroly.narutoworldbackend.model.Ninjas;
import com.decroly.narutoworldbackend.security.JwtUtil;
import com.decroly.narutoworldbackend.services.NinjaServices;
import com.decroly.narutoworldbackend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class NinjaController {

    /* DOCUMENTACION IMPORTANTE Y ELEMENTOS A TENER EN CUENTA

    BBDD:
        Script en la carpeta de resources,
        cambiar la conexion a la BBDD en el application.properties

    LOGIN:
        {
            "username": "naruto",
            "password": "rasengan"
        }

    TOKEN: authHeader.startsWith("Bearer ")
        EN ANGULAR
        setHeaders: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
     */

    private NinjaServices ninjaServices;

    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;
    private UserDetailsService userDetailsService;
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try{
            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
            // Validar la contraseña
            if (userService.validatePassword(request.getPassword(), userDetails.getPassword())) {
                return ResponseEntity.ok(new LoginResponse(jwtUtil.generateToken(userDetails.getUsername())));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario o contraseña incorrectos");
            }
        }catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado");
        }
    }

    @GetMapping(value = "/ninjas")
    public ResponseEntity<Page<Ninjas>> getNinjas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size
    ) {

        return ResponseEntity.ok(ninjaServices.getNinjas(page, size));
    }

    @PostMapping("/ninjas")
    public Ninjas createCharacter(@RequestBody Ninjas character) {
        return ninjaServices.save(character);
    }

    @PutMapping("/ninjas")
    public Ninjas updateCharacter(@RequestBody Ninjas character) {
        return ninjaServices.save(character);
    }

    @DeleteMapping("/ninjas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteNinja(@PathVariable("id") Long id) {
        ninjaServices.deleteById(id);
    }

    @GetMapping(value = "/ninjas/{id}")
    public ResponseEntity<Ninjas> getNinjasById(@PathVariable Long id) {
        Optional<Ninjas> ninjaOptional = ninjaServices.findById(id);

        // Verificar si el personaje está presente
        if (ninjaOptional.isPresent()) {
            return ResponseEntity.ok(ninjaOptional.get()); // Devolver el personaje encontrado con estado 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Devolver 404 si no se encuentra el personaje
        }
    }

    @GetMapping(value = "/ninjas/affiliation/{affiliation}")
    public ResponseEntity<Page<Ninjas>> getNinjaAffiliation(@PathVariable String affiliation,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size) {

        Page<Ninjas> ninjas = ninjaServices.findByAffiliation(affiliation, page, size);

        // Verificar si el personaje está presente
        if (!ninjas.toList().isEmpty()) {
            return ResponseEntity.ok(ninjas); // Devolver el personaje encontrado con estado 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Devolver 404 si no se encuentra el personaje
        }
    }

    @GetMapping(value = "/ninjas/nature/{nature}")
    public ResponseEntity<Page<Ninjas>> getNinjasByNature(@PathVariable String nature,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size) {

        Page<Ninjas> ninjas = ninjaServices.findByNatureType(nature, page, size);
        // Verificar si el personaje está presente
        if (!ninjas.toList().isEmpty()) {
            return ResponseEntity.ok(ninjas); // Devolver el personaje encontrado con estado 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Devolver 404 si no se encuentra el personaje
        }
    }

    @GetMapping(value = "/ninjas/clan/{clan}")
    public ResponseEntity<Page<Ninjas>> getNinjasByClan(@PathVariable String clan,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size) {

        Page<Ninjas> ninjas = ninjaServices.findByClan(clan, page, size);
        // Verificar si el personaje está presente
        if (!ninjas.toList().isEmpty()) {
            return ResponseEntity.ok(ninjas); // Devolver el personaje encontrado con estado 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Devolver 404 si no se encuentra el personaje
        }
    }

    @GetMapping(value = "/ninjas/name/{name}")
    public ResponseEntity<Page<Ninjas>> getNinjasByName(@PathVariable String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size) {

        Page<Ninjas> ninjas = ninjaServices.findByName(name, page, size);
        // Verificar si el personaje está presente
        if (!ninjas.toList().isEmpty()) {
            return ResponseEntity.ok(ninjas); // Devolver el personaje encontrado con estado 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Devolver 404 si no se encuentra el personaje
        }
    }
}
