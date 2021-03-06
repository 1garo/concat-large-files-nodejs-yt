import cluster from 'cluster';

// if (cluster.isWorker) {

//   console.log('Worker ' + process.pid + ' has started.');

//   // Send message to master process.
//   process.send({msgFromWorker: 'This is from worker ' + process.pid + '.'})

//   // Receive messages from the master process.
//   process.on('message', function(msg) {
//     console.log('Worker ' + process.pid + ' received message from master.', msg);
//   });

// }


if (cluster.isMaster) {
  console.log('Master ' + process.pid + ' has started.');
  // Fork workers.
  for (var i = 0; i < 2; i++) {
        var worker = cluster.fork();
        // Receive messages from this worker and handle them in the master process.
        worker.on('message', function(msg) {
            console.log(msg);
        });

        // Send a message from the master process to the worker.
        // worker.send({msgFromMaster: `ALEXANDRE ${i}`});
    }
}else {
    console.log('Worker ' + process.pid + ' has started.');

    // Send message to master process.
    process.send({data: 'dado'})
  
    // Receive messages from the master process.
    process.on('message', function(msg) {
      console.log(msg);
    });
}

//   // Be notified when worker processes die.
//   cluster.on('death', function(worker) {
//     console.log('Worker ' + worker.pid + ' died.');
//   });
// }