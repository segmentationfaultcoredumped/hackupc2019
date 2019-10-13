//
//  ViewController.swift
//  NodeInjectionAPPiOS
//
//  Created by Arnau Nadal on 12/10/2019.
//  Copyright © 2019 Arnau Nadal. All rights reserved.
//

import WebKit

class ViewController: UIViewController {

	@IBOutlet weak var webView: WKWebView!
	
	override func viewDidLoad() {
		super.viewDidLoad()
		
		
		let url = URL(string: "http://127.0.0.1:3000")
		
		webView.load(URLRequest(url: url!))
	}


}

