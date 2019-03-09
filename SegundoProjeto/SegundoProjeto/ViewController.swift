//
//  ViewController.swift
//  SegundoProjeto
//
//  Created by Administrador on 09/03/19.
//  Copyright © 2019 Administrador. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var TextNome: UITextField!
    @IBOutlet weak var TextTelefone: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    @IBAction func pressionar(_ sender: Any) {
        guard let(textNome.text) else {
        print("Nome digitado: \(TextNome.text!)")
        }
    }
    

}

